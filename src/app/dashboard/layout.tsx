"use client"

import { Suspense } from "react"
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black/95 flex">
      <div className="w-[80px] bg-gray-900" />
      <div className="flex-1 p-8 transition-all duration-300 md:ml-[80px]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/4 bg-gray-800 rounded" />
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-800 rounded" />
            ))}
          </div>
          <div className="h-[calc(100vh-16rem)] bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-black/95">
        <div className="flex">
          <AppSidebar />
          <main className="flex-1 p-8 transition-all duration-300 md:ml-[80px]">
            <Suspense fallback={<LoadingFallback />}>
              {children}
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
} 