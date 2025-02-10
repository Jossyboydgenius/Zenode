import React from 'react';
import './styles/globals.css';
import type { Metadata } from 'next';
import { NavBar } from './components/layout/navbar';

export const metadata: Metadata = {
  title: 'Zenode - Web3 Developer Platform',
  description: 'Join Web3\'s gamified developer platform. Turn your coding contributions into rewards and land your dream job.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900">
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
} 