'use client';

import { Award, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'About Us', href: '/about', disabled: true },
      { label: 'How it Works', href: '/how-it-works' },
      { label: 'Learn to Earn', href: '/learn-to-earn' },
      { label: 'Playground', href: '/playground' },
      { label: 'Documentation', href: '/docs', disabled: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', disabled: true },
      { label: 'FAQ', href: '/faq', disabled: true },
      { label: 'Support', href: '/support', disabled: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy', disabled: true },
      { label: 'Terms of Service', href: '/terms', disabled: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-black/95">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 to-green-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.disabled ? (
                      <span className="text-gray-500 cursor-not-allowed">{link.label}</span>
                    ) : (
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Github className="w-5 h-5 text-green-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-green-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-green-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zenode. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.map((section, index) => (
                <Link key={index} href={section.links[0].href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 