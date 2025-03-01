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
import { Code, GitPullRequest, Star, Users, Folder, Clock, ArrowUpRight, Wallet, Image } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Projects from '@/pages/Projects'

const projects = [
   {
      name: "Smart Contract Development",
      description: "Building next-gen DeFi protocols",
      icon: Code,
      contributors: [
         { image: "/avatars/01.png", fallback: "JD" },
         { image: "/avatars/02.png", fallback: "AJ" },
         { image: "/avatars/03.png", fallback: "KN" },
      ],
      updatedAgo: "2h",
      openPRs: 8
   },
   {
      name: "DeFi Integration",
      description: "Integrating multiple DeFi protocols",
      icon: Wallet,
      contributors: [
         { image: "/avatars/04.png", fallback: "EW" },
         { image: "/avatars/05.png", fallback: "RK" },
      ],
      updatedAgo: "5h",
      openPRs: 5
   },
   {
      name: "NFT Marketplace",
      description: "Building a decentralized NFT marketplace",
      icon: Image,
      contributors: [
         { image: "/avatars/06.png", fallback: "ML" },
         { image: "/avatars/07.png", fallback: "SJ" },
         { image: "/avatars/08.png", fallback: "TK" },
      ],
      updatedAgo: "1d",
      openPRs: 12
   },
   {
      name: "Token Bridge",
      description: "Cross-chain token bridge implementation",
      icon: Code,
      contributors: [
         { image: "/avatars/09.png", fallback: "RJ" },
         { image: "/avatars/10.png", fallback: "AM" },
      ],
      updatedAgo: "3d",
      openPRs: 3
   }
]

export default function ProjectsPage() {
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
                           <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                           <BreadcrumbPage>Projects</BreadcrumbPage>
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
                           <Folder className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                           <p className="text-sm text-gray-400">Active Projects</p>
                           <h3 className="text-2xl font-bold text-white">12</h3>
                        </div>
                     </div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                           <GitPullRequest className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                           <p className="text-sm text-gray-400">Open PRs</p>
                           <h3 className="text-2xl font-bold text-white">24</h3>
                        </div>
                     </div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                           <Users className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                           <p className="text-sm text-gray-400">Contributors</p>
                           <h3 className="text-2xl font-bold text-white">48</h3>
                        </div>
                     </div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                           <Star className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                           <p className="text-sm text-gray-400">Stars</p>
                           <h3 className="text-2xl font-bold text-white">256</h3>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Projects List */}
               <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-xl font-semibold text-white">Active Projects</h2>
                     <button
                        className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                     >
                        <Code className="w-5 h-5" />
                        New Project
                     </button>
                  </div>

                  <div className="space-y-4">
                     {projects.map((project, index) => (
                        <div key={index} className="glass-effect p-4 rounded-lg">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <project.icon className="w-5 h-5 text-green-400" />
                                 <div>
                                    <h3 className="text-white font-medium">{project.name}</h3>
                                    <p className="text-sm text-gray-400">{project.description}</p>
                                 </div>
                              </div>
                              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                 <ArrowUpRight className="w-5 h-5 text-gray-400" />
                              </button>
                           </div>
                           <div className="flex items-center gap-4 mt-4">
                              <div className="flex -space-x-2">
                                 {project.contributors.map((contributor, i) => (
                                    <Avatar key={i} className="w-6 h-6 border-2 border-background">
                                       <AvatarImage src={contributor.image} />
                                       <AvatarFallback>{contributor.fallback}</AvatarFallback>
                                    </Avatar>
                                 ))}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                 <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    Updated {project.updatedAgo} ago
                                 </span>
                                 <span className="flex items-center gap-1">
                                    <GitPullRequest className="w-4 h-4" />
                                    {project.openPRs} open PRs
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <Projects />
         </SidebarInset>
      </SidebarProvider>
   )
} 