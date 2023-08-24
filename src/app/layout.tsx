import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/Notification'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QueryWrapper from '@/components/QueryWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuzzFood',
  description: 'Italian Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
<QueryWrapper>
        <div>
       
        <Navbar/>
        {children}
        <Footer/>
        </div>

        
        </QueryWrapper>
        
        </body>
    </html>
  )
}
