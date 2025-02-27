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
import { Code, GitPullRequest, Star, Users, Folder, Clock, ArrowUpRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const contracts = [
  {
    name: "ERC20 Token",
    description: "Standard ERC20 token implementation",
    language: "Solidity",
    contributors: [
      { image: "/avatars/01.png", fallback: "JD" },
      { image: "/avatars/02.png", fallback: "AJ" },
    ],
    updatedAgo: "2h",
    deployments: 12
  },
  {
    name: "NFT Collection",
    description: "ERC721 NFT collection with minting functionality",
    language: "Solidity",
    contributors: [
      { image: "/avatars/03.png", fallback: "KN" },
      { image: "/avatars/04.png", fallback: "EW" },
    ],
    updatedAgo: "5h",
    deployments: 8
  },
  {
    name: "DeFi Vault",
    description: "Yield-generating vault contract",
    language: "Solidity",
    contributors: [
      { image: "/avatars/05.png", fallback: "RK" },
      { image: "/avatars/06.png", fallback: "ML" },
    ],
    updatedAgo: "1d",
    deployments: 5
  },
  {
    name: "Staking Contract",
    description: "Token staking with rewards distribution",
    language: "Solidity",
    contributors: [
      { image: "/avatars/07.png", fallback: "SJ" },
      { image: "/avatars/08.png", fallback: "TK" },
    ],
    updatedAgo: "2d",
    deployments: 15
  }
]

export default function SmartContractsPage() {
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
                  <BreadcrumbPage>Smart Contracts</BreadcrumbPage>
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
                  <p className="text-sm text-gray-400">Total Contracts</p>
                  <h3 className="text-2xl font-bold text-white">24</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Deployments</p>
                  <h3 className="text-2xl font-bold text-white">156</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Test Coverage</p>
                  <h3 className="text-2xl font-bold text-white">92%</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Gas Optimized</p>
                  <h3 className="text-2xl font-bold text-white">85%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Contracts List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Smart Contracts</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                New Contract
              </button>
            </div>

            <div className="space-y-4">
              {contracts.map((contract, index) => (
                <div key={index} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{contract.name}</h3>
                        <p className="text-sm text-gray-400">{contract.description}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      {contract.contributors.map((contributor, i) => (
                        <Avatar key={i} className="w-6 h-6 border-2 border-background">
                          <AvatarImage src={contributor.image} />
                          <AvatarFallback>{contributor.fallback}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Updated {contract.updatedAgo} ago
                      </span>
                      <span className="flex items-center gap-1">
                        <GitPullRequest className="w-4 h-4" />
                        {contract.deployments} deployments
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                        {contract.language}
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