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
import { LineChart, BarChart, PieChart, TrendingUp, ArrowUpRight, Activity, Users, GitPullRequest } from 'lucide-react'

export default function AnalyticsPage() {
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
                  <BreadcrumbPage>Analytics</BreadcrumbPage>
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
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Activity Rate</p>
                  <h3 className="text-2xl font-bold text-white">85%</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Growth</p>
                  <h3 className="text-2xl font-bold text-white">+24%</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">New Users</p>
                  <h3 className="text-2xl font-bold text-white">+156</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">PR Success Rate</p>
                  <h3 className="text-2xl font-bold text-white">92%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Charts */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Activity Chart */}
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Activity Overview</h3>
                  <p className="text-sm text-gray-400">Monthly contribution activity</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px] flex items-center justify-center">
                <LineChart className="w-12 h-12 text-gray-600" />
                <span className="text-sm text-gray-500 ml-2">Chart placeholder</span>
              </div>
            </div>

            {/* Contributions Chart */}
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Contribution Types</h3>
                  <p className="text-sm text-gray-400">Distribution of contributions</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px] flex items-center justify-center">
                <PieChart className="w-12 h-12 text-gray-600" />
                <span className="text-sm text-gray-500 ml-2">Chart placeholder</span>
              </div>
            </div>

            {/* Project Performance */}
            <div className="glass-effect p-6 rounded-xl md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Project Performance</h3>
                  <p className="text-sm text-gray-400">Activity across all projects</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px] flex items-center justify-center">
                <BarChart className="w-12 h-12 text-gray-600" />
                <span className="text-sm text-gray-500 ml-2">Chart placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 