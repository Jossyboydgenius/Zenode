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
import { LifeBuoy, MessageSquare, Mail, Video, FileQuestion } from 'lucide-react'

const supportCards = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    url: "#",
    stats: "Avg. Response Time: 5 mins"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    url: "#",
    stats: "Response within 24 hours"
  },
  {
    title: "Video Tutorials",
    description: "Watch guided tutorials for common issues",
    icon: Video,
    url: "#",
    stats: "50+ Tutorial Videos"
  },
  {
    title: "FAQs",
    description: "Browse our frequently asked questions",
    icon: FileQuestion,
    url: "#",
    stats: "200+ Questions Answered"
  }
]

export default function SupportPage() {
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
                  <BreadcrumbPage>Support</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportCards.map((card) => (
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