// app/api/ai/github/recommend/route.ts
import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';

// Define types for GitHub repositories
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

interface AIRecommendation {
  repositoryName: string;
  repositoryUrl: string;
  description: string;
  reason: string;
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  goodFirstIssue: boolean;
  issueUrl?: string;
  issueTitle?: string;
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { skills, repositories, projects } = body;

    // Check if required data is provided
    if (!skills || !repositories) {
      return NextResponse.json(
        { error: 'Skills and repositories are required' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not set in environment variables' },
        { status: 500 }
      );
    }

    // Initialize Groq LLM
    const groq_model = process.env.GROQ_MODEL;
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: `${groq_model}`, // Use the appropriate model
      temperature: 0
    });

    // Prepare the prompt for AI recommendations
    const prompt = PromptTemplate.fromTemplate(`
      You are an AI assistant that helps developers find GitHub projects to contribute to based on their skills.
      
      User Skills: {skills}
      
      Repositories Data:
      {repositories}
      
      Projects Data:
      {projects}
      
      Based on the user's skills and the provided repositories and projects data, recommend up to 3 repositories 
      that would be a good fit for the user to contribute to.
      
      IMPORTANT: Your response must be ONLY a valid JSON array containing the recommendations.
      Do not include any text before or after the JSON array.
      
      Each recommendation should have the following structure:
      {
        "repositoryName": "string",
        "repositoryUrl": "string",
        "description": "string",
        "reason": "string",
        "skills": ["skill1", "skill2"],
        "difficulty": "Beginner" | "Intermediate" | "Advanced",
        "goodFirstIssue": boolean,
        "issueUrl": "string" (optional),
        "issueTitle": "string" (optional)
      }
    `);

    // Create a chain using RunnableSequence instead of LLMChain
    const chain = RunnableSequence.from([
      prompt,
      model
    ]);

    // Format repositories and projects data
    const formattedRepositories = repositories
      .map((repo: GitHubRepository) => {
        return `
          Name: ${repo.full_name}
          URL: ${repo.html_url}
          Description: ${repo.description || 'N/A'}
          Language: ${repo.language || 'N/A'}
          Stars: ${repo.stargazers_count}
          Forks: ${repo.forks_count}
          Open Issues: ${repo.open_issues_count}
          Topics: ${repo.topics.join(', ') || 'N/A'}
        `;
      })
      .join('\n\n');

    const formattedProjects = projects
      ? projects
          .map((project: GitHubProject) => {
            return `
              Name: ${project.name}
              URL: ${project.html_url}
              Description: ${project.body || 'N/A'}
              State: ${project.state}
              Creator: ${project.creator.login}
            `;
          })
          .join('\n\n')
      : 'No projects data available';

    // Execute the chain
    const result = await chain.invoke({
      skills: skills.join(', '),
      repositories: formattedRepositories,
      projects: formattedProjects,
    });

    // Extract and parse the AI response
    let recommendations: AIRecommendation[] = [];
    try {
      // The AI response from Groq will be in the content property
      const responseContent = result.content;
      
      // Try to parse the entire content as JSON first
      try {
        // If the content is already JSON, convert to string first
        recommendations = JSON.parse(responseContent.toString());
      } catch (parseError) {
        // If that fails, try to extract JSON from the text response
        const jsonMatch = String(responseContent).match(/(\[[\s\S]*\])/m);
        if (jsonMatch) {
          const jsonStr = jsonMatch[0];
          recommendations = JSON.parse(jsonStr);
        } else {
          throw new Error('Could not extract JSON from AI response');
        }
      }
    } catch (error) {
      console.error('Error parsing AI response:', error);
      console.error('Raw response:', result.content);
      return NextResponse.json(
        { error: 'Failed to parse AI recommendations' },
        { status: 500 }
      );
    }

    // Return the recommendations
    return NextResponse.json({ recommendations });
  } catch (error) {
    console.error('Error in AI recommendation API:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}