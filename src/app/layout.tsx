import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CorporateHeader } from '@/components/corporate/CorporateHeader'
import { CorporateFooter } from '@/components/corporate/CorporateFooter'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'RehearsalsAI | From Backstage to Spotlight Ready',
  description: 'AI-powered voice coaches that play your toughest audience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`} style={{ margin: 0, padding: 0 }}>
        <CorporateHeader productName="RehearsalsAI" productAcronym="RA" theme="dark" />
        <main className="flex-1">{children}</main>
        <CorporateFooter productName="RehearsalsAI" theme="dark" />
      </body>
    </html>
  )
}
