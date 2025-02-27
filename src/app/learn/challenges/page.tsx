'use client'

import React from 'react'
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
import { Trophy, Star, ArrowUpRight, Clock, Users, Target, Award, Flame } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const challenges = [
  {
    id: 1,
    title: "Smart Contract Security Audit",
    description: "Find and fix vulnerabilities in a DeFi protocol",
    difficulty: "Advanced",
    xp: 500,
    participants: [
      { image: "/avatars/01.png", fallback: "JD" },
      { image: "/avatars/02.png", fallback: "AJ" },
      { image: "/avatars/03.png", fallback: "KN" },
    ],
    timeLeft: "2d",
    completions: 45,
    reward: "1000 USDC"
  },
  {
    id: 2,
    title: "Optimize Gas Usage",
    description: "Optimize a smart contract for minimal gas consumption",
    difficulty: "Intermediate",
    xp: 300,
    participants: [
      { image: "/avatars/04.png", fallback: "EW" },
      { image: "/avatars/05.png", fallback: "RK" },
    ],
    timeLeft: "5d",
    completions: 78,
    reward: "500 USDC"
  },
  {
    id: 3,
    title: "Build a Token Bridge",
    description: "Create a cross-chain token bridge implementation",
    difficulty: "Advanced",
    xp: 800,
    participants: [
      { image: "/avatars/06.png", fallback: "ML" },
      { image: "/avatars/07.png", fallback: "SJ" },
      { image: "/avatars/08.png", fallback: "TK" },
    ],
    timeLeft: "7d",
    completions: 32,
    reward: "2000 USDC"
  },
  {
    id: 4,
    title: "NFT Staking System",
    description: "Implement an NFT staking system with rewards",
    difficulty: "Intermediate",
    xp: 400,
    participants: [
      { image: "/avatars/09.png", fallback: "RJ" },
      { image: "/avatars/10.png", fallback: "AM" },
    ],
    timeLeft: "3d",
    completions: 65,
    reward: "750 USDC"
  }
]

export default function ChallengesPage() {
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
                  <BreadcrumbLink href="/learn">Learn</BreadcrumbLink>
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
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Completed</p>
                  <h3 className="text-2xl font-bold text-white">8</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Rewards</p>
                  <h3 className="text-2xl font-bold text-white">$5.2k</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">XP Earned</p>
                  <h3 className="text-2xl font-bold text-white">3.8k</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Active Challenges</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Flame className="w-5 h-5" />
                Start Challenge
              </button>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{challenge.title}</h3>
                        <p className="text-sm text-gray-400">{challenge.description}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      {challenge.participants.map((participant, i) => (
                        <Avatar key={i} className="w-6 h-6 border-2 border-background">
                          <AvatarImage src={participant.image} />
                          <AvatarFallback>{participant.fallback}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {challenge.timeLeft} remaining
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {challenge.completions} completions
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {challenge.xp} XP
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {challenge.reward}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        challenge.difficulty === 'Advanced' 
                          ? 'bg-red-500/10 text-red-400'
                          : challenge.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-green-500/10 text-green-400'
                      }`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 