 'use client'

import React from 'react';
import { Globe, Moon, Sun, Monitor, Bell, ChevronRight } from 'lucide-react';
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

export default function PreferencesPage() {
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
                  <BreadcrumbPage>Preferences</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 pt-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Preferences</h1>
            <p className="text-gray-400">Customize your experience with Zenode.</p>
          </div>

          <div className="space-y-6">
            {/* Appearance */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-green-400" />
                Appearance
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Theme</h3>
                    <p className="text-sm text-gray-400">Select your preferred theme</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                      <Sun className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                      <Moon className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                      <Monitor className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Language & Region */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                Language & Region
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Language</h3>
                    <p className="text-sm text-gray-400">Select your preferred language</p>
                  </div>
                  <select className="bg-black/40 border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="ja">日本語</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Time Zone</h3>
                    <p className="text-sm text-gray-400">Set your local time zone</p>
                  </div>
                  <select className="bg-black/40 border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
                    <option value="utc">UTC</option>
                    <option value="est">Eastern Time</option>
                    <option value="pst">Pacific Time</option>
                    <option value="gmt">GMT</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-green-400" />
                Notification Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Email Digest</h3>
                    <p className="text-sm text-gray-400">Frequency of email notifications</p>
                  </div>
                  <select className="bg-black/40 border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="never">Never</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Push Notifications</h3>
                    <p className="text-sm text-gray-400">Configure browser notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-green-400" />
                Advanced Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
                  <div>
                    <h3 className="text-white font-medium">Developer Mode</h3>
                    <p className="text-sm text-gray-400">Enable advanced features and debugging tools</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}