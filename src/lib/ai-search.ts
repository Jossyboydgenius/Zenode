// lib/ai-search.ts
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Define interface for GitHub search results
export interface GitHubSearchResults {
  repositories: {
    items: Array<{
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
    }>;
    total_count: number;
  };
  organizations: {
    items: Array<{
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
    }>;
    total_count: number;
  };
  projects: {
    items: Array<{
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
    }>;
    total_count: number;
  };
}

// Define interface for AI recommendations
export interface AIRecommendation {
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

// AI service for project recommendations
export class AIProjectSearchService {
  private apiEndpoint = '/api/ai/github/recommend';
  private chatEndpoint = '/api/ai/github/chat';
  private threadId: string | null = null;
  
  constructor() {
    // Generate a persistent thread ID for this session
    this.threadId = uuidv4();
  }
  
  // Search for GitHub projects based on user skills
  async searchProjects(skills: string[]): Promise<GitHubSearchResults> {
    if (!skills || skills.length === 0) {
      throw new Error('No skills provided');
    }
    
    // Don't just join the skills with OR
    // Instead, create a proper search query for GitHub
    let searchTerm;
    
    if (skills.length === 1) {
      // For a single skill, we can just use it as a search term
      searchTerm = skills[0];
    } else {
      searchTerm = `stars:>50 ${skills.join(' OR ')}`;
    }
    
    try {
      const response = await axios.post('/api/ai/github/search', {
        searchTerm
      });
      
      return response.data;
    } catch (error) {
      console.error('Error searching GitHub projects:', error);
      throw error;
    }
  }
  
  async getRecommendations(
    skills: string[],
    searchResults: GitHubSearchResults
  ): Promise<AIRecommendation[]> {
    // Make sure we have valid search results
    if (!searchResults?.repositories?.items?.length) {
      throw new Error('No search results to base recommendations on');
    }
    
    try {
      const response = await axios.post(this.apiEndpoint, {
        skills,
        repositories: searchResults.repositories.items.slice(0, 10),
        projects: searchResults.projects?.items || []
      });
      
      return response.data.recommendations;
    } catch (error) {
      console.error('Error getting AI recommendations:', error);
      throw error;
    }
  }
  
  // Chat with AI about projects and skills using LangGraph's persistent memory
  async chat(message: string, skills: string[]): Promise<string> {
    try {
      const response = await axios.post(this.chatEndpoint, {
        message,
        skills,
        threadId: this.threadId // Pass the thread ID for conversation continuity
      });
      
      return response.data.response;
    } catch (error) {
      console.error('Error chatting with AI:', error);
      throw error;
    }
  }
  
  // Reset the conversation thread
  resetThread() {
    this.threadId = uuidv4();
  }
}

export const aiProjectSearchService = new AIProjectSearchService();