'use client'

import React from 'react';
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
import { 
  GitPullRequest, 
  GitPullRequestDraft, 
  GitCommit, 
  MessageSquare, 
  Bug, 
  CheckCircle2,
  Clock,
  AlertCircle,
  Star,
  Trophy
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const contributionCards = [
  {
    title: "My PRs",
    description: "View and manage your pull requests",
    icon: GitPullRequest,
    url: "/contributions/my-prs",
    stats: "48 Total PRs"
  },
  {
    title: "Issues",
    description: "Track and resolve project issues",
    icon: Bug,
    url: "/contributions/issues",
    stats: "24 Active Issues"
  },
  {
    title: "Rewards",
    description: "View your earned rewards and achievements",
    icon: Trophy,
    url: "/contributions/rewards",
    stats: "4,850 XP Earned"
  }
]

export default function ContributionsPage() {
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
                  <BreadcrumbLink href="/contributions">Contributions</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contributionCards.map((card) => (
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
          
          {/* Main Content */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Contributions</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <GitPullRequest className="w-5 h-5" />
                New Pull Request
              </button>
            </div>

            <div className="space-y-6">
              {/* PR Item 1 */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <GitPullRequestDraft className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Smart Contract Optimization</span>
                    <span className="text-sm text-yellow-400">#245</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/20 text-yellow-400">In Review</span>
                  </div>
                  <p className="text-gray-400 mt-1">
                    Optimized gas usage in token swap contract
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      2 hours ago
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      5 comments
                    </span>
                  </div>
                </div>
              </div>

              {/* PR Item 2 */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">NFT Marketplace Integration</span>
                    <span className="text-sm text-green-400">#242</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Merged</span>
                  </div>
                  <p className="text-gray-400 mt-1">
                    Added support for multiple NFT standards
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <GitCommit className="w-4 h-4" />
                      1 day ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured contribution
                    </span>
                  </div>
                </div>
              </div>

              {/* Issue Item */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Bug className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Gas Fee Calculation Bug</span>
                    <span className="text-sm text-red-400">#238</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-red-500/20 text-red-400">Critical</span>
                  </div>
                  <p className="text-gray-400 mt-1">
                    Fixed incorrect gas fee calculation in swap function
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      High Priority
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Resolved
                    </span>
                  </div>
                </div>
              </div>

              {/* PR Item 3 */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Documentation Update</span>
                    <span className="text-sm text-green-400">#235</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Merged</span>
                  </div>
                  <p className="text-gray-400 mt-1">
                    Updated smart contract deployment guides
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <GitCommit className="w-4 h-4" />
                      3 days ago
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      2 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 