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
import { BookOpen, FileText, ArrowUpRight, Clock, Download, Link2, ExternalLink, Bookmark } from 'lucide-react'

const resources = [
  {
    id: 1,
    title: "Smart Contract Development Guide",
    description: "Comprehensive guide to building secure smart contracts",
    type: "Documentation",
    format: "PDF",
    size: "2.4 MB",
    lastUpdated: "2 days ago",
    downloads: 1234,
    category: "Development"
  },
  {
    id: 2,
    title: "Web3 Security Best Practices",
    description: "Essential security practices for Web3 development",
    type: "Whitepaper",
    format: "PDF",
    size: "1.8 MB",
    lastUpdated: "1 week ago",
    downloads: 856,
    category: "Security"
  },
  {
    id: 3,
    title: "DeFi Protocol Architecture",
    description: "In-depth look at DeFi protocol design patterns",
    type: "Technical Paper",
    format: "PDF",
    size: "3.2 MB",
    lastUpdated: "3 days ago",
    downloads: 2156,
    category: "DeFi"
  },
  {
    id: 4,
    title: "NFT Development Toolkit",
    description: "Complete toolkit for NFT smart contract development",
    type: "Resource Kit",
    format: "ZIP",
    size: "15.6 MB",
    lastUpdated: "5 days ago",
    downloads: 1589,
    category: "NFT"
  }
]

const links = [
  {
    id: 1,
    title: "Solidity Documentation",
    description: "Official Solidity programming language documentation",
    url: "https://docs.soliditylang.org/",
    category: "Development"
  },
  {
    id: 2,
    title: "OpenZeppelin Contracts",
    description: "Library for secure smart contract development",
    url: "https://openzeppelin.com/contracts/",
    category: "Security"
  },
  {
    id: 3,
    title: "Web3.js Documentation",
    description: "JavaScript library for Ethereum development",
    url: "https://web3js.readthedocs.io/",
    category: "Development"
  }
]

export default function ResourcesPage() {
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
                  <BreadcrumbPage>Resources</BreadcrumbPage>
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
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Resources</p>
                  <h3 className="text-2xl font-bold text-white">48</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Download className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Downloads</p>
                  <h3 className="text-2xl font-bold text-white">12.5k</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Link2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">External Links</p>
                  <h3 className="text-2xl font-bold text-white">24</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Bookmark className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Saved Items</p>
                  <h3 className="text-2xl font-bold text-white">16</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Resources List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Learning Resources</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Browse All
              </button>
            </div>

            <div className="space-y-8">
              {/* Downloadable Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Downloadable Resources</h3>
                {resources.map((resource) => (
                  <div key={resource.id} className="glass-effect p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-green-400" />
                        <div>
                          <h3 className="text-white font-medium">{resource.title}</h3>
                          <p className="text-sm text-gray-400">{resource.description}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Updated {resource.lastUpdated}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                        {resource.type}
                      </span>
                      <span className="text-gray-400">{resource.format} • {resource.size}</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* External Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">External Resources</h3>
                {links.map((link) => (
                  <div key={link.id} className="glass-effect p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Link2 className="w-5 h-5 text-green-400" />
                        <div>
                          <h3 className="text-white font-medium">{link.title}</h3>
                          <p className="text-sm text-gray-400">{link.description}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                        {link.category}
                      </span>
                      <span className="text-gray-400 truncate">{link.url}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 