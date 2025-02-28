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
import { Shield, Wallet, Bell, Settings } from 'lucide-react'

export default function AccountPage() {
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
                  <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Account</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Security Section */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Security</h3>
                <p className="text-sm text-gray-400">Manage your account security settings</p>
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-black/40 rounded-lg hover:bg-white/5">
                <span className="text-gray-200">Two-Factor Authentication</span>
                <span className="text-xs text-green-400">Enabled</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-black/40 rounded-lg hover:bg-white/5">
                <span className="text-gray-200">Recovery Keys</span>
                <span className="text-xs text-yellow-400">Generate</span>
              </button>
            </div>
          </div>

          {/* Web3 Wallet Section */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Wallet className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Web3 Wallet</h3>
                <p className="text-sm text-gray-400">Manage your connected wallets</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <div>
                  <p className="text-gray-200">Connected Wallet</p>
                  <p className="text-sm text-gray-400">0x1234...5678</p>
                </div>
                <button className="text-red-400 text-sm">Disconnect</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <div>
                  <p className="text-gray-200">Reward Preferences</p>
                  <p className="text-sm text-gray-400">Receive rewards in ETH</p>
                </div>
                <button className="text-green-400 text-sm">Change</button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Settings className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Preferences</h3>
                <p className="text-sm text-gray-400">Customize your account settings</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <span className="text-gray-200">Language</span>
                <select className="bg-transparent text-green-400 outline-none">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <span className="text-gray-200">Time Zone</span>
                <select className="bg-transparent text-green-400 outline-none">
                  <option value="utc">UTC</option>
                  <option value="est">EST</option>
                  <option value="pst">PST</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Bell className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Notifications</h3>
                <p className="text-sm text-gray-400">Manage your notification preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <span className="text-gray-200">Email Notifications</span>
                <button className="text-green-400">Enabled</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                <span className="text-gray-200">Smart Contract Updates</span>
                <button className="text-green-400">Enabled</button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 