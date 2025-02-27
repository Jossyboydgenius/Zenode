'use client'

import React, { useState } from 'react';
import { Shield, Key, Wallet, Lock, AlertTriangle, Smartphone, History } from 'lucide-react';
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

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

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
                  <BreadcrumbLink href="/settings/profile">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Security</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 pt-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Security Settings</h1>
            <p className="text-gray-400">Protect your account and assets with advanced security features</p>
          </div>

          <div className="space-y-6">
            {/* Two-Factor Authentication */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-green-400" />
                Two-Factor Authentication
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">2FA Status</h3>
                    <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={twoFactorEnabled}
                      onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Wallet Security */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-green-400" />
                Wallet Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Hardware Wallet Support</h3>
                    <p className="text-sm text-gray-400">Connect your hardware wallet for enhanced security</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Password & Recovery */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Key className="w-5 h-5 mr-2 text-green-400" />
                Password & Recovery
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Change Password</h3>
                    <p className="text-sm text-gray-400">Update your password regularly for better security</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    Update
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Recovery Keys</h3>
                    <p className="text-sm text-gray-400">Generate backup recovery keys for account access</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    Generate
                  </button>
                </div>
              </div>
            </div>

            {/* Activity & Sessions */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <History className="w-5 h-5 mr-2 text-green-400" />
                Activity & Sessions
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Active Sessions</h3>
                    <p className="text-sm text-gray-400">Manage your active login sessions</p>
                  </div>
                  <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    End All
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Security Log</h3>
                    <p className="text-sm text-gray-400">View recent security events and login attempts</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    View Log
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 