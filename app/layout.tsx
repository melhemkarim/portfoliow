import type { Metadata } from 'next'
import { Inter , Marhey } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const marhey = Marhey({ subsets: ['latin'] })
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
