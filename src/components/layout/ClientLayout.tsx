'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboard && <Footer />}
    </>
  )
} 