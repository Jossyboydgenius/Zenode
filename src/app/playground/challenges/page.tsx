'use client'

import React, { useState } from 'react'
import { AppSidebar } from "@/components/layout/AppSidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Trophy, Star, ArrowUpRight, Clock, Users, Target, Award } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'
import { ChallengeDialog } from '@/components/challenges/ChallengeDialog'

// Extended challenge type with blockchain-related fields
interface Challenge {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  xp: number;
  participants: { image: string; fallback: string }[];
  timeLeft: string;
  completions: number;
  creator: string; // blockchain address
  score: number; // xp to be added
  category: string;
  reward?: string;
}

// Challenge data remains the same
const challenges: Challenge[] = [
  {
    id: "JfA.kN",
    name: "Smart Contract Security Audit",
    description: "Find and fix vulnerabilities in a DeFi protocol. This challenge requires deep knowledge of common smart contract vulnerabilities and security best practices. You'll analyze a protocol for reentrancy attacks, integer overflow/underflow, and other critical issues.",
    difficulty: "Advanced",
    xp: 500,
    participants: [
      { image: "/avatars/01.png", fallback: "JD" },
      { image: "/avatars/02.png", fallback: "AJ" },
      { image: "/avatars/03.png", fallback: "KN" },
    ],
    timeLeft: "2d",
    completions: 45,
    creator: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    score: 500,
    category: "Security",
    reward: "1000 USDC"
  },
  {
    id: "eVRk",
    name: "Optimize Gas Usage",
    description: "Optimize a smart contract for minimal gas consumption. You'll be given a functioning but inefficient smart contract and your task is to reduce its gas usage while maintaining all functionality. This involves refactoring storage patterns, optimizing loops, and implementing gas-efficient design patterns.",
    difficulty: "Intermediate",
    xp: 300,
    participants: [
      { image: "/avatars/04.png", fallback: "EW" },
      { image: "/avatars/05.png", fallback: "RK" },
    ],
    timeLeft: "5d",
    completions: 78,
    creator: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    score: 300,
    category: "Optimization",
    reward: "500 USDC"
  },
  {
    id: "MsTK",
    name: "Build a Token Bridge",
    description: "Create a cross-chain token bridge implementation. This challenge requires you to build a secure bridge that allows tokens to be transferred between different blockchain networks. You'll need to implement locking, minting, and verification mechanisms.",
    difficulty: "Advanced",
    xp: 800,
    participants: [
      { image: "/avatars/06.png", fallback: "ML" },
      { image: "/avatars/07.png", fallback: "SJ" },
      { image: "/avatars/08.png", fallback: "TK" },
    ],
    timeLeft: "7d",
    completions: 32,
    creator: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    score: 800,
    category: "Interoperability",
    reward: "2000 USDC"
  },
  {
    id: "RaW",
    name: "NFT Staking System",
    description: "Implement an NFT staking system with rewards. Design and build a system that allows users to stake their NFTs and earn rewards over time. You'll need to create the staking mechanism, reward distribution, and withdrawal functionality.",
    difficulty: "Intermediate",
    xp: 400,
    participants: [
      { image: "/avatars/09.png", fallback: "RJ" },
      { image: "/avatars/10.png", fallback: "AM" },
    ],
    timeLeft: "3d",
    completions: 65,
    creator: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    score: 400,
    category: "NFT",
    reward: "750 USDC"
  }
]

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setIsDialogOpen(true);
  };

  const handleStartChallenge = () => {
    // Close the dialog and redirect to the editor
    setIsDialogOpen(false);
    router.push('/playground/editor');
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/playground">Playground</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Challenges</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Stats Grid */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Challenges</p>
                  <h3 className="text-2xl font-bold text-white">12</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <h3 className="text-2xl font-bold text-white">458</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Completions</p>
                  <h3 className="text-2xl font-bold text-white">279</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total XP</p>
                  <h3 className="text-2xl font-bold text-white">24.5k</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Active Challenges</h2>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => handleChallengeClick(challenge)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{challenge.name}</h3>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          challenge.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                          challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{challenge.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.timeLeft} remaining</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{challenge.completions} completions</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Star className="w-4 h-4" />
                          <span>{challenge.xp} XP</span>
                        </div>
                        {challenge.reward && (
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Award className="w-4 h-4" />
                            <span>{challenge.reward}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-2 bg-green-500/20 rounded-full">
                      <ArrowUpRight className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <div className="flex -space-x-2">
                      {challenge.participants.map((participant, index) => (
                        <Avatar key={index} className="border-2 border-black w-8 h-8">
                          <AvatarImage src={participant.image} alt="Participant" />
                          <AvatarFallback>{participant.fallback}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs ml-2">+{challenge.participants.length} participants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>

      {/* Use the extracted ChallengeDialog component */}
      <ChallengeDialog 
        challenge={selectedChallenge}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onStartChallenge={handleStartChallenge}
      />
    </SidebarProvider>
  );
}