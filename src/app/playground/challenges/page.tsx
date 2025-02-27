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
    name: "Smart Contract Security",
    description: "Find and fix vulnerabilities in smart contracts",
    difficulty: "Advanced",
    xp: 500,
    participants: [
      { image: "/avatars/01.png", fallback: "JD" },
      { image: "/avatars/02.png", fallback: "AJ" },
      { image: "/avatars/03.png", fallback: "KN" },
    ],
    timeLeft: "2d",
    completions: 45
  },
  {
    name: "DeFi Protocol Integration",
    description: "Build a DeFi protocol integration from scratch",
    difficulty: "Intermediate",
    xp: 300,
    participants: [
      { image: "/avatars/04.png", fallback: "EW" },
      { image: "/avatars/05.png", fallback: "RK" },
    ],
    timeLeft: "5d",
    completions: 78
  },
  {
    name: "NFT Marketplace",
    description: "Create a basic NFT marketplace contract",
    difficulty: "Beginner",
    xp: 200,
    participants: [
      { image: "/avatars/06.png", fallback: "ML" },
      { image: "/avatars/07.png", fallback: "SJ" },
      { image: "/avatars/08.png", fallback: "TK" },
    ],
    timeLeft: "7d",
    completions: 124
  },
  {
    name: "Gas Optimization",
    description: "Optimize smart contract for minimal gas usage",
    difficulty: "Advanced",
    xp: 450,
    participants: [
      { image: "/avatars/09.png", fallback: "RJ" },
      { image: "/avatars/10.png", fallback: "AM" },
    ],
    timeLeft: "3d",
    completions: 32
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
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Flame className="w-5 h-5" />
                Start Challenge
              </button>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{challenge.name}</h3>
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