import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mood v2',
  description: 'Learning Next.Js with Scott Moss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider> 
      <html lang="en" className="overflow-x-hidden">
        <body className={inter.className}>{children}</body>
      </html>    
    </ClerkProvider>
  )
}
