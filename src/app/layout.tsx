import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/Footer'
import { ParticleConnectkit } from '@/context/connect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Zenode',
   description: 'Web3 Development Made Fun',
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
               <Navbar />
               {children}
            </ParticleConnectkit>
            <Footer />
         </body>
      </html>
   )
} 