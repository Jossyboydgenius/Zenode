import React from 'react';
import { Code } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <div className="pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <Code className="w-8 h-8 text-green-400" />
          <h1 className="text-4xl font-bold text-white">Playground</h1>
        </div>
        <div className="glass-effect p-8 rounded-xl">
          <p className="text-gray-300 mb-6">
            Welcome to the Zenode Playground! This is where you can experiment with code, test your skills,
            and learn new technologies in a safe environment.
          </p>
          {/* Add playground features here */}
        </div>
      </div>
    </div>
  );
} 