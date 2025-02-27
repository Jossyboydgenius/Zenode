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
import { BookOpen, Code, Star, Clock, Users, Play, ArrowUpRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tutorials = [
  {
    id: 1,
    title: "Getting Started with Smart Contracts",
    description: "Learn the basics of smart contract development with Solidity",
    level: "Beginner",
    duration: "2 hours",
    instructor: {
      name: "John Doe",
      avatar: "/avatars/01.png",
      fallback: "JD"
    },
    students: 1234,
    rating: 4.8,
    progress: 0
  },
  {
    id: 2,
    title: "Advanced DeFi Protocol Development",
    description: "Build complex DeFi protocols from scratch",
    level: "Advanced",
    duration: "6 hours",
    instructor: {
      name: "Sarah Chen",
      avatar: "/avatars/02.png",
      fallback: "SC"
    },
    students: 856,
    rating: 4.9,
    progress: 30
  },
  {
    id: 3,
    title: "NFT Marketplace Implementation",
    description: "Create your own NFT marketplace with smart contracts",
    level: "Intermediate",
    duration: "4 hours",
    instructor: {
      name: "Mike Wilson",
      avatar: "/avatars/03.png",
      fallback: "MW"
    },
    students: 2156,
    rating: 4.7,
    progress: 0
  },
  {
    id: 4,
    title: "Web3 Security Best Practices",
    description: "Learn how to secure your smart contracts and dApps",
    level: "Advanced",
    duration: "5 hours",
    instructor: {
      name: "Alex Johnson",
      avatar: "/avatars/04.png",
      fallback: "AJ"
    },
    students: 1589,
    rating: 4.9,
    progress: 0
  }
]

export default function TutorialsPage() {
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
                  <BreadcrumbPage>Tutorials</BreadcrumbPage>
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
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Tutorials</p>
                  <h3 className="text-2xl font-bold text-white">24</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-green-400" />
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
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Hours Spent</p>
                  <h3 className="text-2xl font-bold text-white">45</h3>
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
                  <h3 className="text-2xl font-bold text-white">2.4k</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Available Tutorials</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Browse All
              </button>
            </div>

            <div className="space-y-4">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{tutorial.title}</h3>
                        <p className="text-sm text-gray-400">{tutorial.description}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6 border-2 border-background">
                        <AvatarImage src={tutorial.instructor.avatar} />
                        <AvatarFallback>{tutorial.instructor.fallback}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-400">{tutorial.instructor.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {tutorial.students.toLocaleString()} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {tutorial.rating}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tutorial.level === 'Advanced' 
                          ? 'bg-red-500/10 text-red-400'
                          : tutorial.level === 'Intermediate'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-green-500/10 text-green-400'
                      }`}>
                        {tutorial.level}
                      </span>
                      {tutorial.progress > 0 && (
                        <span className="text-green-400">{tutorial.progress}% complete</span>
                      )}
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