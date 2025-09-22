import { Metadata } from 'next'
import AboutUsSection from '@/components/about-us'

export const metadata: Metadata = {
  title: 'About Cossim - Kenya\'s Leading Last Mile Logistics Partner | Cossim Ltd',
  description: 'Discover Cossim\'s story - Kenya\'s trusted last mile logistics company since 2017. We manage 150+ vehicles, handle 1000+ daily parcels, and provide nationwide coverage with 22+ pickup stations.',
  keywords: [
    'about cossim',
    'cossim company story',
    'kenya logistics company',
    'last mile delivery kenya',
    'logistics company history',
    'cossim mission vision',
    'warehousing kenya',
    'pickup stations kenya',
    'heavy goods delivery',
    'expedited shipping kenya'
  ],
  openGraph: {
    title: 'About Cossim - Kenya\'s Leading Last Mile Logistics Partner',
    description: 'Since 2017, Cossim has been Kenya\'s trusted logistics partner, managing 150+ vehicles and handling 1000+ daily parcels with nationwide coverage.',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cossim - Kenya\'s Leading Last Mile Logistics Partner',
    description: 'Since 2017, Cossim has been Kenya\'s trusted logistics partner, managing 150+ vehicles and handling 1000+ daily parcels.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutUsSection />
    </main>
  )
}