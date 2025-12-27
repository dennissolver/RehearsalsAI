import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RehearsalsAI | From Backstage to Spotlight Ready',
  description: 'AI-powered voice coaches that play your toughest audience. Practice, get scored, and perfect your performance before the moment that matters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
