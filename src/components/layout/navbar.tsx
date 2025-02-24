'use client';

import Link from 'next/link';
import { Award, Code } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="nav-glass fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Award className="w-10 h-10 text-green-400" />
          <span className="text-2xl font-bold gradient-text">Zenode</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">How it Works</Link>
          <Link href="/learn-to-earn" className="text-gray-300 hover:text-green-400 transition-colors">Learn to Earn</Link>
          <Link href="/playground" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Playground
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/auth/signin"
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
} 
