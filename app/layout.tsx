import type { Metadata } from 'next'
import { Inter , Philosopher } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const marhey = Philosopher({ subsets: ['latin'], weight: ['400'] })
export const metadata: Metadata = {
  title: 'Wedad Ajeeb',
  description: 'Wedad Ajeeb Portfolio',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
     <meta property="og:image" content="/p17.jpg" />
      <body className={marhey.className}>{children}</body>
    </html>
  )
}
