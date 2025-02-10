import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-black/95">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 transition-all duration-300 md:ml-[80px]">
          {children}
        </main>
      </div>
    </div>
  );
} 