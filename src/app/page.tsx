'use client';

import { Trophy, GitPullRequest, Bug, Users, Sparkles, ChevronRight, Stars, Rocket, Diamond } from 'lucide-react';
import { StatCard, FeatureCard, WhyJoinCard, TestimonialCard } from '@/components/ui/cards';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 bg-black">
        {/* Gradient overlay - inverted direction */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-green-900/50"></div>
        
        {/* Curved line */}
        <div className="curve-container">
          <div className="curved-line"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Level up your coding journey</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white">
              Open source contributions
              <br />
              in <span className="gradient-text green-glow">Web3</span>
              <br />
              <span className="gradient-text green-glow">Made Fun.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto glass-effect p-6 rounded-xl">
              Join Web3's gamified developer platform. Turn your coding contributions into rewards and land your dream job.
            </p>
            <Link href="/dashboard/submit-proposal">
              <button className="magical-border text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto">
                Submit a Proposal
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative w-full bg-black py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon={Users} value="10,000+" label="Active Developers" />
            <StatCard icon={GitPullRequest} value="50,000+" label="Pull Requests" />
            <StatCard icon={Bug} value="25,000+" label="Bugs Fixed" />
            <StatCard icon={Trophy} value="100,000+" label="XP Earned" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full bg-black py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/70 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Features</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Game-Changing Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Trophy}
              title="XP & Leaderboards"
              description="Earn experience points for every contribution and compete with developers worldwide."
            />
            <FeatureCard
              icon={Stars}
              title="Daily Streaks"
              description="Maintain your coding streak and earn bonus rewards for consistent contributions."
            />
            <FeatureCard
              icon={Rocket}
              title="Loot Boxes"
              description="Unlock special rewards and badges for achieving milestones and completing challenges."
            />
          </div>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="relative w-full bg-black py-32">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-green-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Intuitive interface</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Track Your Progress
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Celebrate the joy of accomplishment with an app designed to track your progress, 
              motivate your efforts, and celebrate your successes, one task at a time.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-green-500/20">
            <img 
              src="/dashboard.png" 
              alt="Dashboard Preview" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative w-full bg-black py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-400 mb-8">Trusted by:</h3>
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-8">
              {/* First set of logos */}
              <div className="flex items-center space-x-8 shrink-0 animate-scroll">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-8 shrink-0">
                    <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="Avalanche" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/aragon-ant-logo.png" alt="Aragon" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="BNB" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/balancer-bal-logo.png" alt="Balancer" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/ethereum-classic-etc-logo.png" alt="Ethereum" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="Polygon" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="Uniswap" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Aave" className="h-8 w-auto" />
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scrolling */}
              <div className="flex items-center space-x-8 shrink-0 animate-scroll">
                {[...Array(3)].map((_, index) => (
                  <div key={`duplicate-${index}`} className="flex items-center space-x-8 shrink-0">
                    <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="Avalanche" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/aragon-ant-logo.png" alt="Aragon" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="BNB" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/balancer-bal-logo.png" alt="Balancer" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/ethereum-classic-etc-logo.png" alt="Ethereum" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="Polygon" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="Uniswap" className="h-8 w-auto" />
                    <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Aave" className="h-8 w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="relative w-full bg-black py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Why Join the <span className="gradient-text green-glow">Ecosystem</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyJoinCard
              icon={Diamond}
              title="Get Rewarded For Your Code Contributions"
              description="Get onchain credentials to earn points and boost your profile's visibility."
              buttonText="Learn More"
            />
            <WhyJoinCard
              icon={Rocket}
              title="Land Your Next Project 4x Faster"
              description="An AI project matching engine fine-tuned to your skills and aspirations."
              buttonText="Land a Job"
            />
            <WhyJoinCard
              icon={Stars}
              title="Enhance Your Skillset And Boost Your Salary"
              description="Become a blockchain developer with Zenode for free. Master Solidity and Rust development."
              buttonText="Upskill Now"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full bg-black/95 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-6">
              Add 100k Builders to Your Network
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-16">
              <span className="text-white">Trustpilot Rating</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-green-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200"
              name="Johnson Asiedu"
              role="Software Engineer"
              testimonial="Zenode is cooking something really sweet with their gamified code contribution platform. Leveraging AI to match developers to potential projects by best fitting them to skillset while also creating a system where develpers can verify their skills via coderbyte is a unique move imo."
            />
            <TestimonialCard
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
              name="Teodor Dutulescu"
              role="Blockchain Developer"
              testimonial="The platform's approach to gamifying open source contributions is brilliant. It makes the whole process of learning and contributing to Web3 projects much more engaging and rewarding."
            />
            <TestimonialCard
              imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200"
              name="Sarah Chen"
              role="Full Stack Developer"
              testimonial="I've landed two major projects through Zenode's AI matching system. The platform's ability to match developers with projects based on their actual coding abilities rather than just their resume is game-changing."
            />
          </div>
        </div>
      </div>
    </>
  );
}