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
import { Code, GitPullRequest, CheckCircle, AlertCircle, Clock, Users } from 'lucide-react'

const contracts = [
  {
    id: 1,
    name: "ERC20 Token",
    description: "Standard ERC20 token implementation with additional features",
    status: "Deployed",
    lastDeployed: "2 days ago",
    network: "Ethereum Mainnet",
    audited: true,
    contributors: 4
  },
  {
    id: 2,
    name: "NFT Marketplace",
    description: "Decentralized NFT marketplace with royalty support",
    status: "In Development",
    lastDeployed: "1 week ago",
    network: "Polygon",
    audited: false,
    contributors: 6
  },
  {
    id: 3,
    name: "Staking Protocol",
    description: "Flexible staking protocol with reward distribution",
    status: "Testing",
    lastDeployed: "3 days ago",
    network: "BSC",
    audited: true,
    contributors: 3
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
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
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
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Contracts</p>
                  <h3 className="text-2xl font-bold text-white">12</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Deployed</p>
                  <h3 className="text-2xl font-bold text-white">8</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Pull Requests</p>
                  <h3 className="text-2xl font-bold text-white">24</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Issues</p>
                  <h3 className="text-2xl font-bold text-white">5</h3>
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
              {contracts.map((contract) => (
                <div key={contract.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{contract.name}</h3>
                        <p className="text-sm text-gray-400">{contract.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        contract.status === 'Deployed' 
                          ? 'bg-green-500/10 text-green-400'
                          : contract.status === 'Testing'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {contract.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Last deployed {contract.lastDeployed}
                    </span>
                    <span className="text-gray-400">{contract.network}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {contract.contributors} contributors
                    </span>
                    {contract.audited && (
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                        Audited
                      </span>
                    )}
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