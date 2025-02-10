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
        <main className="flex-1 p-8 ml-[280px]">
          {children}
        </main>
      </div>
    </div>
  );
} 