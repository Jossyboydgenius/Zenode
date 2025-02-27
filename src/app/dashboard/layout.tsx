"use client"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-background`}>
      {children}
    </div>
  )
}