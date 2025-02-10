import React from 'react';
import './styles/globals.css';
import { Navbar } from './components/layout/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
} 