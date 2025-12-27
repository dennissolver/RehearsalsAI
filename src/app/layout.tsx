import type { Metadata } from 'next'

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
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}