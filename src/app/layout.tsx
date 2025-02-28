import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParticleConnectkit } from '@/context/connect'
import { ClientLayout } from '@/components/layout/ClientLayout'
import ReduxProvider from '@/context/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Zenode - Next-Gen Blockchain Development Platform',
   description: 'Empowering developers with next-generation blockchain development tools and infrastructure.',
   icons: {
      icon: '/logo.png',
      apple: '/logo.png',
   },
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ReduxProvider>
               <ParticleConnectkit>
                  <ClientLayout>
                     {children}
                  </ClientLayout>
               </ParticleConnectkit>
            </ReduxProvider>
         </body>
      </html>
   )
} 