// import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { 
  MessagesAnnotation, 
  StateGraph, 
  MemorySaver 
} from '@langchain/langgraph';
import { BaseLanguageModelInput } from '@langchain/core/language_models/base';

// Define types for API responses
interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  license: {
    name: string;
  } | null;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GitHubOrganization {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  description: string | null;
  public_repos: number;
  blog: string | null;
  location: string | null;
  email: string | null;
  twitter_username: string | null;
  followers: number;
}

interface GitHubProject {
  id: number;
  name: string;
  body: string | null;
  html_url: string;
  number: number;
  state: string;
  creator: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

interface GitHubSearchResponse {
  repositories: {
    items: GitHubRepository[];
    total_count: number;
  };
  organizations: {
    items: GitHubOrganization[];
    total_count: number;
  };
  projects: {
    items: GitHubProject[];
    total_count: number;
  };
}

// Optimize search query using LangChain
async function optimizeSearchQuery(searchTerm: string): Promise<string> {
  if (!process.env.GROQ_API_KEY) {
    return searchTerm;
  }

  try {
    // Initialize LLM
    const groq_model = process.env.GROQ_MODEL;
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: `${groq_model}`,
      temperature: 0
    });

    // Create prompt template for query optimization
    const promptTemplate = ChatPromptTemplate.fromMessages([
      [
        "system",
        `You are an AI assistant that helps optimize GitHub search queries.
        Your job is to take a user's search term and convert it into an effective GitHub search query
        that will return relevant repositories.
        
        IMPORTANT: ONLY return the optimized search query string itself.
        Do NOT include explanations, numbering, suggestions or any text other than the actual query.
        
        Follow GitHub's search syntax:
        - For language filters, use: language:javascript
        - Multiple languages should be separate filters: language:javascript language:typescript
        - For star filters, use: stars:>50
        - Keep the query simple and valid for GitHub's API
        
        Examples:
        - Input: "react state management"
        - Output: react state management language:javascript stars:>50
        
        - Input: "machine learning python"
        - Output: machine learning language:python stars:>50
        
        Return only the optimized search query, nothing else.`
      ],
      ["human", `Original search term: "${searchTerm}"`]
    ]);

    const formattedMessages = await promptTemplate.formatMessages({});

    // Create the search optimization graph
    const callModel = async (state: { messages: BaseLanguageModelInput; }) => {
      // Use the formatted messages from the prompt template
      const response = await model.invoke(formattedMessages);
      return { messages: [response] };
    };
    // Define graph
    const workflow = new StateGraph(MessagesAnnotation)
      .addNode("model", callModel)
      .addEdge("__start__", "model")
      .addEdge("model", "__end__");

    // Compile the graph
    const app = workflow.compile();

    // Invoke the application
    const output = await app.invoke({ messages: formattedMessages });
    
    // Get the response
    const responseMessage = output.messages[output.messages.length - 1];
    return typeof responseMessage.content === 'string' 
      ? responseMessage.content.trim() 
      : responseMessage.content.toString();
  } catch (error) {
    console.error('Error optimizing search query:', error);
    return searchTerm;
  }
}

// Export a named function for the POST method
export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const body = await req.json();
    const { searchTerm } = body;

    if (!searchTerm || typeof searchTerm !== 'string') {
      return new Response(
        JSON.stringify({ message: 'Search term is required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Optimize the search query using LangChain
    const optimizedQuery = await optimizeSearchQuery(searchTerm);
    console.log(`Original query: "${searchTerm}" -> Optimized: "${optimizedQuery}"`);

    // Create the GitHub API headers
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add authorization header if GitHub token is provided in environment variables
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(optimizedQuery)}&sort=stars&order=desc&per_page=10`,
      { headers }
    );
    
    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.statusText}`);
    }
    
    const reposData = await reposResponse.json();

    // Fetch organizations
    const orgsResponse = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(optimizedQuery)}+type:org&per_page=5`,
      { headers }
    );
    
    if (!orgsResponse.ok) {
      throw new Error(`GitHub API error: ${orgsResponse.statusText}`);
    }
    
    const orgsData = await orgsResponse.json();

    // Fetch detailed information for each organization
    const orgDetails = await Promise.all(
      orgsData.items.slice(0, 5).map(async (org: any) => {
        const orgDetailResponse = await fetch(
          `https://api.github.com/orgs/${org.login}`,
          { headers }
        );
        
        if (!orgDetailResponse.ok) {
          return null;
        }
        
        return await orgDetailResponse.json();
      })
    );

    // Filter out any null results from organization details
    const organizations = orgDetails.filter(org => org !== null);

    // For projects, we need to search in repositories that might have projects
    // GitHub doesn't have a direct API for searching projects across all repositories
    // We'll check projects in the top repositories we found
    const projectsData = {
      items: [] as GitHubProject[],
      total_count: 0
    };

    // Check for projects in the top 3 repositories
    for (const repo of reposData.items.slice(0, 3)) {
      try {
        const projectsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/projects`,
          { 
            headers: {
              ...headers,
              'Accept': 'application/vnd.github.inertia-preview+json' // Required for projects API
            }
          }
        );
        
        if (projectsResponse.ok) {
          const repoProjects = await projectsResponse.json();
          if (Array.isArray(repoProjects) && repoProjects.length > 0) {
            projectsData.items.push(...repoProjects);
            projectsData.total_count += repoProjects.length;
          }
        }
      } catch (error) {
        console.error(`Error fetching projects for ${repo.full_name}:`, error);
      }
    }

    // Prepare the response
    const response: GitHubSearchResponse = {
      repositories: {
        items: reposData.items.map((repo: GitHubRepository) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          open_issues_count: repo.open_issues_count,
          language: repo.language,
          topics: repo.topics || [],
          updated_at: repo.updated_at,
          license: repo.license,
          default_branch: repo.default_branch,
          owner: {
            login: repo.owner.login,
            avatar_url: repo.owner.avatar_url
          }
        })),
        total_count: reposData.total_count
      },
      organizations: {
        items: organizations,
        total_count: organizations.length
      },
      projects: projectsData
    };

    // Return the response
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('GitHub search API error:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Error searching GitHub', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}