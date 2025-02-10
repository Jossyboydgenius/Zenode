import React from 'react';
import { Book, Rocket, Diamond, Award } from 'lucide-react';

interface PathCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  rewards: string[];
  level: string;
}

function PathCard({ icon: Icon, title, description, rewards, level }: PathCardProps) {
  return (
    <div className="glass-effect p-8 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-500/20 rounded-lg">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <span className="px-4 py-1.5 bg-green-500/10 text-green-400 rounded-full text-sm inline-flex items-center justify-center w-fit">
          {level}
        </span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-3">
        <h4 className="text-white font-semibold">Rewards:</h4>
        <ul className="space-y-2">
          {rewards.map((reward, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <Award className="w-4 h-4 text-green-400 mr-2" />
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
    <div className="pt-32 px-4">
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
          <button className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
} 