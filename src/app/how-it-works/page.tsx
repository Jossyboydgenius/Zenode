'use client';

import { Code, GitPullRequest, Trophy, Star, ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

function StepCard({ icon: Icon, title, description, step }: StepCardProps) {
  return (
    <div className="glass-effect p-8 rounded-xl relative">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">
        {step}
      </div>
      <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            How <span className="gradient-text green-glow">Zenode</span> Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our community of developers and start earning while contributing to exciting Web3 projects.
            Here's how it works:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StepCard
            icon={Code}
            title="Create Your Profile"
            description="Sign up and create your developer profile. Showcase your skills, experience, and interests in Web3 development."
            step={1}
          />
          <StepCard
            icon={GitPullRequest}
            title="Start Contributing"
            description="Browse available projects and start contributing. Submit pull requests and get them reviewed by project maintainers."
            step={2}
          />
          <StepCard
            icon={Trophy}
            title="Earn Rewards"
            description="Get rewarded for your contributions. Earn XP, badges, and tokens for completed tasks and merged pull requests."
            step={3}
          />
          <StepCard
            icon={Star}
            title="Level Up"
            description="Level up your profile, unlock new opportunities, and become a recognized contributor in the Web3 ecosystem."
            step={4}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            href="/auth/signin"
            className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto group"
          >
            <span className="relative z-10 flex items-center">
              Start Contributing Now
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 