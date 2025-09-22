import HeroSection4 from '@/components/hero-section-4'
import FeatureGrid3 from '@/components/feature-grid-3'
import Steps2 from '@/components/steps-2'
import StatsSection from '@/components/stats'
import Faq2 from '@/components/faq-2'
import { Section } from '@/components/sections'
import { JsonLd } from '@/components/seo/jsonld'
import { load } from '@/lib/load-content'
import { HomeContent } from '@/types/content'

export default async function Home() {
  const home = await load<HomeContent>('home')
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cossim",
    "url": "https://www.cossim.co.ke",
    "logo": "https://www.cossim.co.ke/cossim-logo.svg",
    "description": "B2B logistics services in Kenya including last-mile delivery, pickup stations, and warehousing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressLocality": "Nairobi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2547 4655 6931",
      "contactType": "customer service",
      "email": "info@cossim.co.ke"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "serviceType": ["Logistics", "Delivery", "Warehousing", "Pickup Stations"]
  }
  
  return (
    <>
      <JsonLd data={organizationSchema} />
      <main>
        <HeroSection4 
          tagline={home.tagline}
          headline={home.headline}
          sub={home.sub}
          ctas={home.ctas}
        />
        <Section id="services"><FeatureGrid3/></Section>
        <Section className="bg-ink-100"><Steps2/></Section>
        <Section><StatsSection/></Section>
        <Section id="faq" className="bg-ink-100"><Faq2/></Section>
      </main>
    </>
  )
}