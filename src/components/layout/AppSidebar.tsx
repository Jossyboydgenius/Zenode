"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  PieChart,
  Code,
  GitPullRequest,
  BookOpen,
  Settings2,
  LifeBuoy,
  Wallet,
  Image as LucideImage,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavUser } from "@/components/nav/NavUser"

const data = {
  user: {
    name: "johndoe",
    email: "john@zenode.dev",
    avatar: "/avatars/john.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
        {
          title: "Projects",
          url: "/dashboard/projects",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Playground",
      url: "/playground",
      icon: Code,
      items: [
        {
          title: "Code Editor",
          url: "/playground/editor",
        },
        {
          title: "Smart Contracts",
          url: "/playground/smart-contracts",
        },
        {
          title: "Web3 Integration",
          url: "/playground/web3",
        },
        {
          title: "Challenges",
          url: "/playground/challenges",
        },
      ],
    },
    {
      title: "Contributions",
      url: "/contributions",
      icon: GitPullRequest,
      items: [
        {
          title: "My PRs",
          url: "/contributions/prs",
        },
        {
          title: "Issues",
          url: "/contributions/issues",
        },
        {
          title: "Rewards",
          url: "/contributions/rewards",
        },
      ],
    },
    {
      title: "Learn",
      url: "/learn",
      icon: BookOpen,
      items: [
        {
          title: "Tutorials",
          url: "/learn/tutorials",
        },
        {
          title: "Challenges",
          url: "/learn/challenges",
        },
        {
          title: "Resources",
          url: "/learn/resources",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Preferences",
          url: "/settings/preferences",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "Smart Contracts",
      url: "/projects/smart-contracts",
      icon: Code,
    },
    {
      name: "DeFi Integration",
      url: "/projects/defi",
      icon: Wallet,
    },
    {
      name: "NFT Marketplace",
      url: "/projects/nft",
      icon: LucideImage,
    },
  ],
}

export function AppSidebar() {
  const pathname = usePathname() || ""

  // Memoize the navigation items to prevent unnecessary re-renders
  const navigationItems = React.useMemo(() => data.navMain.map((item) => (
    <SidebarMenuItem key={item.title}>
      <div className="flex items-center gap-2 px-4 py-2">
        {item.icon && <item.icon className="w-5 h-5" />}
        <span>{item.title}</span>
      </div>
      {item.items && (
        <div className="pl-4 space-y-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className={`block px-4 py-2 text-sm rounded-lg ${
                pathname === subItem.url
                  ? "text-white bg-gray-800"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </SidebarMenuItem>
  )), [pathname])

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2">
          <div className="relative w-8 h-8">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" priority />
          </div>
          <span className="font-semibold">Zenode</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
