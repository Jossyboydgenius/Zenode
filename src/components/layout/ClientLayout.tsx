'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAppRoute = pathname?.startsWith('/dashboard') || pathname?.startsWith('/contributions')

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