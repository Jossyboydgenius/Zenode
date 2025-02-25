import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ParticleConnectkit } from '@/context/connect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Zenode - Next-Gen Blockchain Development Platform',
   description: 'Empowering developers with next-generation blockchain development tools and infrastructure.',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ParticleConnectkit>
               <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-grow">
                     {children}
                  </main>
                  <Footer />
               </div>
            </ParticleConnectkit>
         </body>
      </html>
   )
} 