'use client'

import React from 'react'
import { AppSidebar } from "@/components/layout/AppSidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Code, Wallet, Image, ArrowLeftRight } from 'lucide-react'

const projectCards = [
  {
    title: "Smart Contracts",
    description: "Build and deploy secure smart contracts",
    icon: Code,
    url: "/projects/smart-contracts",
    stats: "12 Active Contracts"
  },
  {
    title: "DeFi Integration",
    description: "Integrate DeFi protocols and services",
    icon: Wallet,
    url: "/projects/defi",
    stats: "3 Active Protocols"
  },
  {
    title: "NFT Marketplace",
    description: "Create and manage NFT collections",
    icon: Image,
    url: "/projects/nft",
    stats: "158 Collections"
  },
  {
    title: "Token Bridge",
    description: "Cross-chain token bridge implementation",
    icon: ArrowLeftRight,
    url: "/projects/token-bridge",
    stats: "5 Active Bridges"
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
                  <BreadcrumbPage>Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectCards.map((card) => (
              <a 
                key={card.title}
                href={card.url}
                className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <card.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{card.stats}</div>
              </a>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 