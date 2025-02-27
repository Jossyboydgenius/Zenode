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
import { ArrowLeftRight, Activity, Wallet, Clock, ArrowUpRight, ChevronRight } from 'lucide-react'

const bridges = [
  {
    id: 1,
    name: "ETH-BSC Bridge",
    description: "Bridge tokens between Ethereum and Binance Smart Chain",
    status: "Active",
    volume24h: "$1.2M",
    totalLocked: "$8.5M",
    lastTransaction: "5 mins ago",
    supportedTokens: ["ETH", "USDT", "USDC"]
  },
  {
    id: 2,
    name: "ETH-Polygon Bridge",
    description: "Fast and secure bridge to Polygon network",
    status: "Active",
    volume24h: "$850K",
    totalLocked: "$5.2M",
    lastTransaction: "12 mins ago",
    supportedTokens: ["ETH", "MATIC", "USDC"]
  },
  {
    id: 3,
    name: "Arbitrum Bridge",
    description: "Layer 2 scaling solution for Ethereum",
    status: "Maintenance",
    volume24h: "$650K",
    totalLocked: "$4.1M",
    lastTransaction: "1 hour ago",
    supportedTokens: ["ETH", "ARB", "USDT"]
  }
]

export default function TokenBridgePage() {
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
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Token Bridge</BreadcrumbPage>
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
                  <ArrowLeftRight className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Bridges</p>
                  <h3 className="text-2xl font-bold text-white">5</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">24h Volume</p>
                  <h3 className="text-2xl font-bold text-white">$2.7M</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Wallet className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Locked</p>
                  <h3 className="text-2xl font-bold text-white">$17.8M</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avg Time</p>
                  <h3 className="text-2xl font-bold text-white">2.5 min</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bridges List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Token Bridges</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <ArrowLeftRight className="w-5 h-5" />
                New Bridge
              </button>
            </div>

            <div className="space-y-4">
              {bridges.map((bridge) => (
                <div key={bridge.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ArrowLeftRight className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{bridge.name}</h3>
                        <p className="text-sm text-gray-400">{bridge.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        bridge.status === 'Active' 
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {bridge.status}
                      </span>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Activity className="w-4 h-4" />
                      24h Volume: {bridge.volume24h}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wallet className="w-4 h-4" />
                      TVL: {bridge.totalLocked}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Last tx: {bridge.lastTransaction}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">Supported:</span>
                      {bridge.supportedTokens.map((token, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                          {token}
                        </span>
                      ))}
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