'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAppRoute = pathname?.startsWith('/dashboard') || 
                    pathname?.startsWith('/contributions') || 
                    pathname?.startsWith('/playground') ||
                    pathname?.startsWith('/settings') ||
                    pathname?.startsWith('/learn') ||
                    pathname?.startsWith('/projects')

  return (
    <>
      {!isAppRoute && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAppRoute && <Footer />}
    </>
  )
} 