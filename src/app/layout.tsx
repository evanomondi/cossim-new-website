import './globals.css'
import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { localBusiness } from '@/lib/seo'

export const metadata: Metadata = {
  title: { 
    default: 'Cossim - Reliable B2B Logistics Solutions in Kenya', 
    template: '%s | Cossim - B2B Logistics Kenya' 
  },
  description: 'Leading B2B logistics provider in Kenya offering last mile delivery, pickup stations, and warehousing solutions. Trusted by businesses across Kenya for reliable, efficient logistics services.',
  keywords: ['B2B logistics Kenya', 'last mile delivery', 'pickup stations', 'warehousing Kenya', 'logistics solutions', 'delivery services Kenya', 'supply chain management'],
  authors: [{ name: 'Cossim' }],
  creator: 'Cossim',
  publisher: 'Cossim',
  metadataBase: new URL('https://www.cossim.co.ke'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cossim - Reliable B2B Logistics Solutions in Kenya',
    description: 'Leading B2B logistics provider in Kenya offering last mile delivery, pickup stations, and warehousing solutions. Trusted by businesses across Kenya.',
    url: 'https://www.cossim.co.ke',
    siteName: 'Cossim',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cossim - B2B Logistics Solutions in Kenya',
      }
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'Cossim - Reliable B2B Logistics Solutions in Kenya',
    description: 'Leading B2B logistics provider in Kenya offering last mile delivery, pickup stations, and warehousing solutions.',
    images: ['/og.jpg'],
    creator: '@cossim_ke',
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'logistics',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness()),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-dvh antialiased bg-white text-ink-900`} suppressHydrationWarning={true}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
