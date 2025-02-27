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
import { Wallet, Activity, ArrowUpRight, Clock, Users, DollarSign, LineChart } from 'lucide-react'

const protocols = [
  {
    id: 1,
    name: "Lending Protocol",
    description: "Decentralized lending and borrowing platform",
    status: "Live",
    tvl: "$12.5M",
    apy: "8.5%",
    lastUpdate: "5 mins ago",
    users: 1250,
    chains: ["Ethereum", "BSC", "Polygon"]
  },
  {
    id: 2,
    name: "Yield Aggregator",
    description: "Multi-chain yield optimization protocol",
    status: "Testing",
    tvl: "$8.2M",
    apy: "12.3%",
    lastUpdate: "15 mins ago",
    users: 850,
    chains: ["Ethereum", "Avalanche"]
  },
  {
    id: 3,
    name: "DEX Integration",
    description: "Cross-chain decentralized exchange",
    status: "Development",
    tvl: "$5.1M",
    apy: "6.2%",
    lastUpdate: "1 hour ago",
    users: 620,
    chains: ["Ethereum", "Arbitrum"]
  }
]

export default function DeFiPage() {
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
                  <BreadcrumbPage>DeFi Integration</BreadcrumbPage>
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
                  <Wallet className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total TVL</p>
                  <h3 className="text-2xl font-bold text-white">$25.8M</h3>
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
                  <h3 className="text-2xl font-bold text-white">$4.2M</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Users</p>
                  <h3 className="text-2xl font-bold text-white">2,720</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <LineChart className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avg APY</p>
                  <h3 className="text-2xl font-bold text-white">9.2%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Protocols List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">DeFi Protocols</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                New Protocol
              </button>
            </div>

            <div className="space-y-4">
              {protocols.map((protocol) => (
                <div key={protocol.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{protocol.name}</h3>
                        <p className="text-sm text-gray-400">{protocol.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        protocol.status === 'Live' 
                          ? 'bg-green-500/10 text-green-400'
                          : protocol.status === 'Testing'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {protocol.status}
                      </span>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      TVL: {protocol.tvl}
                    </span>
                    <span className="flex items-center gap-1">
                      <LineChart className="w-4 h-4" />
                      APY: {protocol.apy}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {protocol.users} users
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Updated {protocol.lastUpdate}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">Chains:</span>
                      {protocol.chains.map((chain, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                          {chain}
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