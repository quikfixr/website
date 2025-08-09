import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuikFikr - Book Trusted Local Services in Minutes',
  description: 'From plumbing to AC repair — everything you need, just a tap away. QuikFikr connects you with trusted local experts in tier 2 and 3 Indian cities.',
  keywords: 'home services, local services, plumbing, AC repair, India, tier 2 cities, tier 3 cities',
  authors: [{ name: 'QuikFikr Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 