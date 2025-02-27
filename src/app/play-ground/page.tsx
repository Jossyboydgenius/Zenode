'use client'

import { Code, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PlayGroundPage() {
  const router = useRouter();

  return (
    <div className="pt-32 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 text-green-400 mr-4" />
          <h1 className="text-4xl font-bold text-white">Code Playground</h1>
        </div>
        
        <div className="space-y-8">
          <div className="glass-effect p-8 rounded-xl mb-8">
            <p className="text-gray-400 mb-8">
              Welcome to the Zenode Code Playground. Here you can practice your coding skills,
              experiment with smart contracts, and test your Web3 integrations.
            </p>
            <button 
              onClick={() => router.push('/playground')}
              className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto group"
            >
              <span className="relative z-10 flex items-center">
                Start Coding
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 