"use client"

import { useState, useEffect, FormEvent } from 'react';
import { SkillSelector } from '@/components/challenges/SkillSelector';
import { useUserSkills } from '@/lib/skills';
import { aiProjectSearchService, GitHubSearchResults, AIRecommendation } from '@/lib/ai-search';
import { Code, MessageSquare, Search, Sparkles, Star, GitFork, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { AIChatbot } from '@/components/AI/ChatBot';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function GitHubSearch() {
  const { skills } = useUserSkills();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<GitHubSearchResults | null>(null);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendationsError, setRecommendationsError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'search' | 'recommendations' | 'chat'>('recommendations');
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  // Effect to generate recommendations when skills change
  useEffect(() => {
    if (skills.length > 0) {
      generateRecommendations();
    }
  }, [skills]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    setActiveTab('search');
    
    try {
      const data = await aiProjectSearchService.searchProjects([searchTerm]);
      setResults(data);
      
      // Get AI recommendations based on search results
      await getRecommendationsFromResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  const generateRecommendations = async () => {
    if (skills.length === 0) {
      setRecommendationsError('Please add some skills first');
      return;
    }
    
    // We need search results to generate recommendations
    if (!results || !results.repositories || results.repositories.items.length === 0) {
      setRecommendationsError('Please perform a search first to get recommendations based on those results');
      return;
    }
    
    setRecommendationsLoading(true);
    setRecommendationsError(null);
    
    try {
      // Get AI recommendations based on search results and skills
      const recommendations = await aiProjectSearchService.getRecommendations(skills, results);
      setRecommendations(recommendations);
    } catch (err) {
      setRecommendationsError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setRecommendationsLoading(false);
    }
  };
  
  const getRecommendationsFromResults = async (searchResults: GitHubSearchResults) => {
    if (skills.length === 0) return;
    
    setRecommendationsLoading(true);
    setRecommendationsError(null);
    
    try {
      const recommendations = await aiProjectSearchService.getRecommendations(skills, searchResults);
      setRecommendations(recommendations);
    } catch (err) {
      setRecommendationsError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setRecommendationsLoading(false);
    }
  };
  
  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage('');
    setChatLoading(true);
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
    
    try {
      const response = await aiProjectSearchService.chat(userMessage, skills);
      
      // Add assistant response to chat history
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please try again.' 
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                  <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Search</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </header>
                <div className="max-w-6xl mx-auto p-4">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-3">Find Your Next Contribution</h1>
                    <p className="text-gray-400">Discover GitHub projects that match your skills and interests.</p>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="mb-8 glass-effect p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsSkillsOpen(!isSkillsOpen)}>
                      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-400" />
                        Your Skills
                      </h2>
                      {isSkillsOpen ? (
                        <ChevronUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    
                    {isSkillsOpen && (
                      <div className="mt-4">
                        <SkillSelector showLabel={false} />
                        
                        {skills.length > 0 && (
                          <div className="mt-4 flex justify-end">
                            <button 
                              onClick={generateRecommendations}
                              disabled={recommendationsLoading}
                              className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                            >
                              {recommendationsLoading ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                  Finding projects...
                                </>
                              ) : (
                                <>
                                  <Sparkles className="w-4 h-4" />
                                  Find Projects for Me
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Manual Search Form */}
                  <div className="mb-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search GitHub repositories..."
                        className="flex-1 p-3 border border-green-500/20 bg-black/50 rounded-lg text-white"
                      />
                      <button 
                        type="submit"
                        className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-400 border-t-transparent"></div>
                            Searching...
                          </>
                        ) : (
                          <>
                            <Search className="w-4 h-4" />
                            Search
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                  
                  {/* Tabs */}
                  <div className="border-b border-green-500/20 flex mb-6">
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === 'recommendations' 
                          ? 'text-green-400 border-b-2 border-green-400' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => setActiveTab('recommendations')}
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        AI Recommendations
                      </div>
                    </button>
                    
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === 'search' 
                          ? 'text-green-400 border-b-2 border-green-400' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => setActiveTab('search')}
                    >
                      <div className="flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        Search Results
                      </div>
                    </button>
                    
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === 'chat' 
                          ? 'text-green-400 border-b-2 border-green-400' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => setActiveTab('chat')}
                    >
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        AI Assistant
                      </div>
                    </button>
                  </div>
                  
                  {/* Error Messages */}
                  {error && activeTab === 'search' && (
                    <div className="bg-red-500/20 border border-red-500/40 text-red-400 px-4 py-3 rounded-lg mb-4">
                      {error}
                    </div>
                  )}
                  
                  {recommendationsError && activeTab === 'recommendations' && (
                    <div className="bg-red-500/20 border border-red-500/40 text-red-400 px-4 py-3 rounded-lg mb-4">
                      {recommendationsError}
                    </div>
                  )}
                  
                  {/* Content based on active tab */}
                  {activeTab === 'recommendations' && (
                    <div>
                      {recommendationsLoading ? (
                        <div className="flex justify-center items-center py-16">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
                        </div>
                      ) : recommendations.length > 0 ? (
                        <div className="space-y-6">
                          {recommendations.map((recommendation, index) => (
                            <div key={index} className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
                                    <a 
                                      href={recommendation.repositoryUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-green-400 transition-colors"
                                    >
                                      {recommendation.repositoryName}
                                    </a>
                                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                                      recommendation.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                                      recommendation.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                      'bg-green-500/20 text-green-400'
                                    }`}>
                                      {recommendation.difficulty}
                                    </span>
                                  </h3>
                                  
                                  <p className="text-gray-400 mb-4">{recommendation.description}</p>
                                  
                                  <div className="mb-4">
                                    <h4 className="text-white font-medium mb-1">Why it's a good match:</h4>
                                    <p className="text-gray-400">{recommendation.reason}</p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h4 className="text-white font-medium mb-1">Relevant skills:</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {recommendation.skills.map((skill, idx) => (
                                        <span 
                                          key={idx} 
                                          className="px-2 py-1 bg-green-500/20 text-green-400 text-sm rounded-full"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {recommendation.goodFirstIssue && recommendation.issueUrl && (
                                    <div className="mb-4">
                                      <h4 className="text-white font-medium mb-1">Suggested issue:</h4>
                                      <a 
                                        href={recommendation.issueUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-green-400 hover:underline"
                                      >
                                        {recommendation.issueTitle || "View issue"}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400">
                          {skills.length > 0 ? (
                            <div>
                              <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-50" />
                              <p className="mb-4">No recommendations yet. Click "Find Projects for Me" to get started.</p>
                              <button 
                                onClick={generateRecommendations}
                                className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors mx-auto"
                              >
                                <Sparkles className="w-4 h-4" />
                                Find Projects for Me
                              </button>
                            </div>
                          ) : (
                            <div>
                              <Code className="w-12 h-12 mx-auto mb-3 opacity-50" />
                              <p className="mb-4">Add your skills above to get personalized project recommendations.</p>
                              <button 
                                onClick={() => setIsSkillsOpen(true)}
                                className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors mx-auto"
                              >
                                <Code className="w-4 h-4" />
                                Add Your Skills
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'search' && (
                    <div>
                      {loading ? (
                        <div className="flex justify-center items-center py-16">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
                        </div>
                      ) : results ? (
                        <div className="space-y-8">
                          {/* Repositories Section */}
                          <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Repositories ({results.repositories.total_count})</h2>
                            {results.repositories.items.length > 0 ? (
                              <div className="space-y-4">
                                {results.repositories.items.map(repo => (
                                  <div key={repo.id} className="glass-effect p-4 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                      <img 
                                        src={repo.owner.avatar_url} 
                                        alt={`${repo.owner.login}'s avatar`} 
                                        className="w-8 h-8 rounded-full"
                                      />
                                      <a 
                                        href={repo.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                                      >
                                        {repo.full_name}
                                      </a>
                                    </div>
                                    
                                    {repo.description && (
                                      <p className="text-gray-400 mb-3">{repo.description}</p>
                                    )}
                                    
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {repo.topics.map(topic => (
                                        <span 
                                          key={topic} 
                                          className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full"
                                        >
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                      {repo.language && (
                                        <span className="flex items-center gap-1">
                                          <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                          {repo.language}
                                        </span>
                                      )}
                                      
                                      <span className="flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        {repo.stargazers_count.toLocaleString()}
                                      </span>
                                      
                                      <span className="flex items-center gap-1">
                                        <GitFork className="w-4 h-4" />
                                        {repo.forks_count.toLocaleString()}
                                      </span>
                                      
                                      <span className="flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {repo.open_issues_count.toLocaleString()} issues
                                      </span>
                                      
                                      <span className="flex items-center gap-1">
                                        Updated: {new Date(repo.updated_at).toLocaleDateString()}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-400">No repositories found matching your search.</p>
                            )}
                          </section>
                          
                          {/* Organizations Section */}
                          <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Organizations ({results.organizations.total_count})</h2>
                            {results.organizations.items.length > 0 ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {results.organizations.items.map(org => (
                                  <div key={org.id} className="glass-effect p-4 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                      <img 
                                        src={org.avatar_url} 
                                        alt={`${org.login}'s avatar`} 
                                        className="w-12 h-12 rounded-full"
                                      />
                                      <div>
                                        <a 
                                          href={org.html_url} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                                        >
                                          {org.login}
                                        </a>
                                        {org.location && (
                                          <p className="text-sm text-gray-400">{org.location}</p>
                                        )}
                                      </div>
                                    </div>
                                    
                                    {org.description && (
                                      <p className="text-gray-400 mb-3">{org.description}</p>
                                    )}
                                    
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                      <span>📚 {org.public_repos.toLocaleString()} public repos</span>
                                      <span>👥 {org.followers.toLocaleString()} followers</span>
                                      
                                      {org.blog && (
                                        <a 
                                          href={org.blog.startsWith('http') ? org.blog : `https://${org.blog}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-green-400 hover:underline"
                                        >
                                          🔗 Website
                                        </a>
                                      )}
                                      
                                      {org.twitter_username && (
                                        <a 
                                          href={`https://twitter.com/${org.twitter_username}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-green-400 hover:underline"
                                        >
                                          🐦 @{org.twitter_username}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-400">No organizations found matching your search.</p>
                            )}
                          </section>
                          
                          {/* Projects Section */}
                          <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Projects ({results.projects.total_count})</h2>
                            {results.projects.items.length > 0 ? (
                              <div className="space-y-4">
                                {results.projects.items.map(project => (
                                  <div key={project.id} className="glass-effect p-4 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                      <img 
                                        src={project.creator.avatar_url} 
                                        alt={`${project.creator.login}'s avatar`} 
                                        className="w-8 h-8 rounded-full"
                                      />
                                      <a 
                                        href={project.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                                      >
                                        {project.name}
                                      </a>
                                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                                        project.state === 'open' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                      }`}>
                                        {project.state}
                                      </span>
                                    </div>
                                    
                                    {project.body && (
                                      <p className="text-gray-400 mb-3">{project.body}</p>
                                    )}
                                    
                                    <div className="text-sm text-gray-400">
                                      <p>Created by {project.creator.login} on {new Date(project.created_at).toLocaleDateString()}</p>
                                      <p>Last updated: {new Date(project.updated_at).toLocaleDateString()}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-400">No projects found matching your search.</p>
                            )}
                          </section>
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400">
                          <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p>Enter a search term to find GitHub repositories, organizations, and projects.</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'chat' && (
                    <div className="h-[500px]">
                      <AIChatbot className="h-full" />
                    </div>
                  )}
                </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
function setChatHistory(arg0: (prev: any) => any[]) {
  throw new Error('Function not implemented.');
}

