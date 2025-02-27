'use client'

import React from 'react';
import { Bell, Star, GitPullRequest, Trophy, Settings, Code, MessageSquare } from 'lucide-react';
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notifications = [
  {
    id: 1,
    type: 'achievement',
    user: {
      name: 'Awe Joseph',
      avatar: '/avatars/carol.jpg',
      fallback: 'AJ'
    },
    content: 'earned a badge',
    badge: 'Smart Contract Genius',
    description: 'Completed 20 smart contract challenges',
    icon: Star,
    iconColor: 'text-yellow-400',
    time: '10 hours ago'
  },
  {
    id: 2,
    type: 'pull_request',
    user: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      fallback: 'SC'
    },
    content: 'reviewed your pull request',
    prName: 'Add NFT Marketplace Integration',
    icon: GitPullRequest,
    iconColor: 'text-purple-400',
    time: '2 hours ago'
  },
  {
    id: 3,
    type: 'challenge',
    user: {
      name: 'Dev Team',
      avatar: '/avatars/team.jpg',
      fallback: 'DT'
    },
    content: 'published a new challenge',
    challengeName: 'Build a DeFi Lending Protocol',
    icon: Code,
    iconColor: 'text-green-400',
    time: '1 day ago'
  }
];

export default function NotificationsPage() {
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
                  {/* <BreadcrumbLink href="/settings">Settings</BreadcrumbLink> */}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Notifications</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 pt-0">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Notifications</h1>
              <p className="text-gray-400">Stay updated with your activity and achievements</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-gray-800 rounded-lg text-gray-200 hover:bg-gray-800/50 transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div key={notification.id} className="glass-effect p-6 rounded-xl hover:bg-green-500/5 transition-colors">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                      <AvatarFallback>{notification.user.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{notification.user.name}</span>
                        <span className="text-gray-400">{notification.content}</span>
                        {notification.badge && (
                          <span className={`flex items-center gap-1 ${notification.iconColor}`}>
                            <Icon className="w-4 h-4" />
                            {notification.badge}
                          </span>
                        )}
                      </div>
                      {notification.description && (
                        <p className="text-gray-400 mt-1">
                          {notification.description}
                        </p>
                      )}
                      {notification.prName && (
                        <p className="text-gray-400 mt-1">
                          "{notification.prName}"
                        </p>
                      )}
                      {notification.challengeName && (
                        <p className="text-gray-400 mt-1">
                          "{notification.challengeName}"
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 