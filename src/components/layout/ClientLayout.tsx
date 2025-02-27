'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Helper function to check if it's an app route
  const isAppRoute = 
    // Main app routes
    pathname?.startsWith('/dashboard') || 
    pathname?.startsWith('/contributions') || 
    pathname?.startsWith('/playground') ||
    pathname?.startsWith('/settings') ||
    pathname?.startsWith('/projects') ||
    pathname?.startsWith('/support') ||
    pathname?.startsWith('/docs') ||
    // Exact match for /learn but not /learn-to-earn
    pathname === '/learn' ||
    // Any routes under /learn/ but not /learn-to-earn
    (pathname?.startsWith('/learn/') && !pathname?.startsWith('/learn-to-earn'))

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