import React from 'react';
import { Code } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <div className="pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 text-green-400 mr-4" />
          <h1 className="text-4xl font-bold text-white">Code Playground</h1>
        </div>
        <div className="glass-effect p-8 rounded-xl">
          <p className="text-gray-400 mb-8">
            Welcome to the Zenode Code Playground. Here you can practice your coding skills,
            experiment with smart contracts, and test your Web3 integrations.
          </p>
          {/* Add playground components here */}
        </div>
      </div>
    </div>
  );
} 