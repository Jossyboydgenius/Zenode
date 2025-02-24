'use client';

import { useState } from 'react';
import { Code, ChevronRight, Play, Save } from 'lucide-react';

function CodeEditor() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Code className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Web3 Playground</h3>
        </div>
        <div className="flex gap-3">
          <button className="glass-effect px-4 py-2 rounded-lg text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save
          </button>
          <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500/30 transition-colors flex items-center gap-2">
            <Play className="w-4 h-4" />
            Run Code
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-24rem)]">
        <div className="glass-effect p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">main.sol</span>
          </div>
          <textarea 
            className="w-full h-[calc(100%-2rem)] bg-transparent text-gray-300 font-mono resize-none focus:outline-none"
            placeholder="// Write your smart contract code here..."
          />
        </div>
        
        <div className="glass-effect p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Console Output</span>
          </div>
          <div className="h-[calc(100%-2rem)] text-gray-400 font-mono">
            <pre className="whitespace-pre-wrap">{'> Ready to compile and run your code...'}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlaygroundPage() {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 text-green-400 mr-4" />
          <h1 className="text-4xl font-bold text-white">Code Playground</h1>
        </div>
        
        {showEditor ? (
          <CodeEditor />
        ) : (
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-xl">
              <p className="text-gray-400 mb-8">
                Welcome to the Zenode Code Playground. Here you can practice your coding skills,
                experiment with smart contracts, and test your Web3 integrations.
              </p>
              <button 
                onClick={() => setShowEditor(true)}
                className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto group"
              >
                <span className="relative z-10 flex items-center">
                  Start Coding
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 