import { Section } from '@/components/sections'
import { load } from '@/lib/load-content'
import { SectionHeading } from '@/components/site/section-heading'
import { ServiceContent } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import FeaturesSection from '@/components/features-section'
import { 
  BoltIcon,
  MapPinIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const lastMileFeatures = [
  {
    title: "Lightning Fast",
    description: "Express 1-hour delivery in CBD and select zones",
    icon: BoltIcon
  },
  {
    title: "Real-time Tracking",
    description: "Track your packages every step of the way",
    icon: MapPinIcon
  },
  {
    title: "Secure & Insured",
    description: "All packages are insured and handled with care",
    icon: ShieldCheckIcon
  },
  {
    title: "Nationwide Coverage",
    description: "Delivery to all 47 counties in Kenya",
    icon: GlobeAltIcon
  },
  {
    title: "Competitive Rates",
    description: "Transparent pricing with no hidden fees",
    icon: CurrencyDollarIcon
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support",
    icon: PhoneIcon
  }
]

export default async function LastMilePage() {
  const data = await load<ServiceContent>('last-mile')
  
  return (
    <main>
      <Section>
        <SectionHeading title={data.headline} sub={data.sub} />
      </Section>
      
      {/* Service Tiers */}
      <Section className="bg-ink-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Delivery Options
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the speed that fits your business needs
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.tiers?.map((tier, index) => (
            <Card key={index} className={index === 0 ? 'border-primary' : ''}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{tier.name}</CardTitle>
                  {index === 0 && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription>{tier.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant={index === 0 ? "default" : "outline"} asChild>
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Features */}
      <FeaturesSection 
        title="Why Choose Our Last-Mile Service"
        features={lastMileFeatures}
      />

      {/* FAQ */}
      <Section className="bg-ink-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {data.faqs?.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What areas do you cover?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We cover all major cities and towns across Kenya, with express delivery available in Nairobi CBD and select zones.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your last-mile delivery needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pickup-stations/stations">Find Pickup Stations</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}