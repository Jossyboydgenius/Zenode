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
import { Image, Activity, ArrowUpRight, Clock, Users, DollarSign, Paintbrush } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const collections = [
  {
    id: 1,
    name: "Crypto Punks",
    description: "Unique digital collectibles on Ethereum",
    status: "Listed",
    floorPrice: "12.5 ETH",
    volume24h: "245 ETH",
    lastSale: "5 mins ago",
    items: 10000,
    owners: 3200,
    creator: {
      name: "CryptoPunks Lab",
      avatar: "/avatars/01.png",
      fallback: "CP"
    }
  },
  {
    id: 2,
    name: "Bored Apes",
    description: "Exclusive NFT collection with utility",
    status: "Trending",
    floorPrice: "18.2 ETH",
    volume24h: "320 ETH",
    lastSale: "2 mins ago",
    items: 8500,
    owners: 5100,
    creator: {
      name: "BAYC",
      avatar: "/avatars/02.png",
      fallback: "BA"
    }
  },
  {
    id: 3,
    name: "Art Blocks",
    description: "Generative art on the blockchain",
    status: "New",
    floorPrice: "2.8 ETH",
    volume24h: "89 ETH",
    lastSale: "15 mins ago",
    items: 12000,
    owners: 4200,
    creator: {
      name: "Art Blocks Studio",
      avatar: "/avatars/03.png",
      fallback: "AB"
    }
  }
]

export default function NFTMarketplacePage() {
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
                  <BreadcrumbPage>NFT Marketplace</BreadcrumbPage>
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
                  <Image className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Collections</p>
                  <h3 className="text-2xl font-bold text-white">158</h3>
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
                  <h3 className="text-2xl font-bold text-white">654 ETH</h3>
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
                  <h3 className="text-2xl font-bold text-white">12.5k</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Paintbrush className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Artists</p>
                  <h3 className="text-2xl font-bold text-white">2.8k</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Collections List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">NFT Collections</h2>
              <button 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Image className="w-5 h-5" />
                New Collection
              </button>
            </div>

            <div className="space-y-4">
              {collections.map((collection) => (
                <div key={collection.id} className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-white font-medium">{collection.name}</h3>
                        <p className="text-sm text-gray-400">{collection.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        collection.status === 'Trending' 
                          ? 'bg-green-500/10 text-green-400'
                          : collection.status === 'New'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {collection.status}
                      </span>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6 border-2 border-background">
                        <AvatarImage src={collection.creator.avatar} />
                        <AvatarFallback>{collection.creator.fallback}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-400">{collection.creator.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        Floor: {collection.floorPrice}
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        Volume: {collection.volume24h}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Last sale: {collection.lastSale}
                      </span>
                      <span className="flex items-center gap-1">
                        <Image className="w-4 h-4" />
                        {collection.items} items
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {collection.owners} owners
                      </span>
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