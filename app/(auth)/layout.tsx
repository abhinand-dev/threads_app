import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads App',
  description: 'Threads App clone generated with Next.js',
}

import React from 'react'

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider> 
  )
}

export default RootLayout