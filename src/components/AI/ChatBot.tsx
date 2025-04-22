'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, User, RefreshCw } from 'lucide-react';
import { useUserSkills } from '@/lib/skills';
import { aiProjectSearchService } from '@/lib/ai-search';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatbot({ className = '' }: { className?: string }) {
  const { skills } = useUserSkills();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Add initial assistant message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: skills.length > 0 
            ? `Hello! I'm your developer assistant. I can help you find GitHub projects that match your skills (${skills.join(', ')}). How can I help you today?` 
            : 'Hello! I\'m your developer assistant. I can help you find GitHub projects to contribute to. To provide better recommendations, could you share some of your programming skills?'
        }
      ]);
    }
  }, [skills]);
  
  // Scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle sending a message
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Start loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await aiProjectSearchService.chat(userMessage, skills);
      
      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please try again.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Reset chat
  const handleResetChat = () => {
    setMessages([]);
    aiProjectSearchService.resetThread();
  };
  
  return (
    <div className={`flex flex-col h-full bg-black/30 rounded-lg border border-green-500/20 ${className}`}>
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-green-400" />
          <h3 className="font-medium text-white">AI Chatbot</h3>
        </div>
        <button 
          onClick={handleResetChat}
          className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-green-500/10 transition-colors"
          title="Reset chat"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              flex gap-3 max-w-[80%] rounded-lg p-3
              ${message.role === 'user' 
                ? 'bg-green-500/20 text-white' 
                : 'bg-gray-800/50 text-white'
              }
            `}>
              <div className="flex-shrink-0 mt-1">
                {message.role === 'user' 
                  ? <User className="w-5 h-5 text-white" /> 
                  : <Bot className="w-5 h-5 text-green-400" />
                }
              </div>
              <div>
                {message.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[80%] rounded-lg p-3 bg-gray-800/50 text-white">
              <div className="flex-shrink-0 mt-1">
                <Bot className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Ref for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form 
        onSubmit={handleSendMessage} 
        className="border-t border-green-500/20 p-4"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, coding skills, or GitHub contributions..."
            className="flex-1 bg-black/50 border border-green-500/20 rounded-lg px-4 py-2 text-white"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-green-500/20 hover:bg-green-500/30 text-green-400 p-2 rounded-lg transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}