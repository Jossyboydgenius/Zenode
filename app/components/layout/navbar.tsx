import { Award, Code } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="nav-glass fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
        <div className="flex items-center space-x-3">
          <Award className="w-10 h-10 text-green-400" />
          <span className="text-2xl font-bold gradient-text">Zenode</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">How it Works</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Learn to Earn</a>
          <a href="/playground" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Playground
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors">Login</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
} 