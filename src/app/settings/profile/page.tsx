'use client'

import React, { useState } from 'react';
import { User, Mail, Link as LinkIcon, Upload, ChevronDown } from 'lucide-react';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [experience, setExperience] = useState<string>("Select years of experience");
  
  const experienceOptions = [
    "Less than 1 year",
    "1-2 years",
    "2-5 years",
    "5-10 years",
    "10+ years"
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 pt-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Profile</h1>
            <p className="text-gray-400">This is how others will see you on the site.</p>
          </div>

          <div className="space-y-8">
            {/* Avatar Upload Section */}
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Profile Picture</h2>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt="Profile" 
                      className="w-full h-full rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg bg-green-500/20 flex items-center justify-center">
                      <User className="w-8 h-8 text-green-400" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 p-1 bg-green-500/20 rounded-full cursor-pointer hover:bg-green-500/30 transition-colors">
                    <Upload className="w-4 h-4 text-green-400" />
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <div className="text-sm text-gray-400">
                  Recommended: Square image, at least 400x400px
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="glass-effect p-6 rounded-xl space-y-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-white">Username</span>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text"
                      placeholder="Your username"
                      className="w-full bg-black/40 border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    This is your public display name. It can be your real name or a pseudonym.
                  </p>
                </label>

                <label className="block">
                  <span className="text-white">Email</span>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email"
                      placeholder="Select a verified email to display"
                      className="w-full bg-black/40 border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    You can manage verified email addresses in your email settings.
                  </p>
                </label>

                <label className="block">
                  <span className="text-white">Bio</span>
                  <textarea 
                    placeholder="Tell us about yourself"
                    className="mt-1 w-full bg-black/40 border border-gray-800 rounded-lg py-2 px-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[100px]"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    You can @mention other users and organizations to link to them.
                  </p>
                </label>

                <label className="block">
                  <span className="text-white">URLs</span>
                  <div className="mt-1 space-y-2">
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="url"
                        placeholder="Add a URL to your website, blog, or social media profiles"
                        className="w-full bg-black/40 border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </label>

                {/* Years of Experience Dropdown */}
                <label className="block">
                  <span className="text-white">Years of Experience</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="mt-1 w-full bg-black/40 border border-gray-800 rounded-lg py-2 px-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 flex justify-between items-center">
                      {experience}
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] bg-black/90 border border-gray-800">
                      {experienceOptions.map((option) => (
                        <DropdownMenuItem
                          key={option}
                          onClick={() => setExperience(option)}
                          className="text-gray-200 hover:text-white hover:bg-green-500/20"
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </label>
              </div>

              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 