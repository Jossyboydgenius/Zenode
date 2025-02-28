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
import { BookOpen, Code, Rocket, Shield, Terminal } from 'lucide-react'

const docCategories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic concepts",
    icon: Rocket,
    url: "#",
    stats: "5 min read"
  },
  {
    title: "Smart Contracts",
    description: "Learn about smart contract development",
    icon: Code,
    url: "#",
    stats: "15+ Guides"
  },
  {
    title: "Security",
    description: "Best practices for secure development",
    icon: Shield,
    url: "#",
    stats: "10 Security Guides"
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Terminal,
    url: "#",
    stats: "100+ Endpoints"
  }
]

export default function DocumentationPage() {
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
                  <BreadcrumbPage>Documentation</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docCategories.map((category) => (
              <a 
                key={category.title}
                href={category.url}
                className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{category.stats}</div>
              </a>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 