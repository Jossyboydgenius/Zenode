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
import Profile from '@/pages/Profile';

export default function ProfilePage() {
   // const [avatar, setAvatar] = useState<string | null>(null);
   // const [experience, setExperience] = useState<string>("Select years of experience");

   // const experienceOptions = [
   //    "Less than 1 year",
   //    "1-2 years",
   //    "2-5 years",
   //    "5-10 years",
   //    "10+ years"
   // ];

   // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
   //    const file = event.target.files?.[0];
   //    if (file) {
   //       const reader = new FileReader();
   //       reader.onloadend = () => {
   //          setAvatar(reader.result as string);
   //       };
   //       reader.readAsDataURL(file);
   //    }
   // };

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
            <Profile />
         </SidebarInset>
      </SidebarProvider>
   );
} 