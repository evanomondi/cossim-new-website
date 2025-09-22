import './globals.css'
import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'

export const metadata: Metadata = {
  title: { default: 'Cossim', template: '%s | Cossim' },
  description: 'B2B logistics in Kenya. Last mile, pickup stations, warehousing.',
  metadataBase: new URL('https://www.cossim.co.ke'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cossim',
    description: 'Reliable logistics services in Kenya',
    url: 'https://www.cossim.co.ke',
    siteName: 'Cossim',
    images: ['/og.jpg'],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-dvh antialiased bg-white text-ink-900`} suppressHydrationWarning={true}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
