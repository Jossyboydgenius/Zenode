'use client';

import { Book, Rocket, Diamond, ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface PathCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  level: string;
  rewards: string[];
}

function PathCard({ icon: Icon, title, description, level, rewards }: PathCardProps) {
  return (
    <div className="glass-effect p-8 rounded-xl">
      <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm mb-4">
        {level}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-white">Rewards:</h4>
        <ul className="space-y-1">
          {rewards.map((reward, index) => (
            <li key={index} className="text-gray-400 text-sm flex items-center">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
              {reward}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function LearnToEarnPage() {
  const learningPaths = [
    {
      icon: Book,
      title: "Web3 Fundamentals",
      description: "Learn the basics of blockchain technology, smart contracts, and decentralized applications.",
      level: "Beginner",
      rewards: [
        "500 XP on completion",
        "Web3 Fundamentals Badge",
        "Access to intermediate courses"
      ]
    },
    {
      icon: Rocket,
      title: "Smart Contract Development",
      description: "Master Solidity programming and learn to write secure smart contracts for various use cases.",
      level: "Intermediate",
      rewards: [
        "1000 XP on completion",
        "Smart Contract Expert Badge",
        "Real project opportunities"
      ]
    },
    {
      icon: Diamond,
      title: "DeFi Protocol Engineering",
      description: "Deep dive into DeFi protocols, tokenomics, and advanced smart contract patterns.",
      level: "Advanced",
      rewards: [
        "2000 XP on completion",
        "DeFi Expert Badge",
        "Priority access to DeFi projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Learn to <span className="gradient-text green-glow">Earn</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start your Web3 development journey and earn rewards while learning.
              Choose your learning path and level up your skills.
            </p>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {learningPaths.map((path, index) => (
              <PathCard key={index} {...path} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href="/dashboard"
              className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
            >
              <span className="relative z-10 flex items-center">
                Start Learning Now
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 