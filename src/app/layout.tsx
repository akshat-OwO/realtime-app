import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RealChat',
  description: 'RealChat is a cutting-edge real-time chat application built using the power of NEXT.js and Upstash Redis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
