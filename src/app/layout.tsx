import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Background from '@/components/Background'

export const metadata: Metadata = {
  title: 'uikaむ | Portfolio',
  description: 'Student Engineer & Designer based in Kyoto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen relative">
        <Background />
        <Nav />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
