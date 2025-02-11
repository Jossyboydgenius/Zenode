import React from 'react';
import { Award, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-effect py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-xl font-bold gradient-text">Zenode</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future of Web3 development, one contribution at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Learn to Earn</a></li>
              <li><a href="/playground" className="text-gray-400 hover:text-green-400 transition-colors">Playground</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Github className="w-5 h-5 text-green-400" />
              </a>
              <a href="#" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-green-400" />
              </a>
              <a href="#" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zenode. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 