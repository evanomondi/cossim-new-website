import { Section } from '@/components/sections'
import { load } from '@/lib/load-content'
import { ServiceContent } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ServiceHero } from '@/components/service-hero'

import { 
  MapPinIcon,
  BuildingStorefrontIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  CreditCardIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const pickupStationFeatures = [
  {
    title: "Strategic Locations",
    description: "Conveniently located in high-traffic areas across Kenya",
    icon: MapPinIcon
  },
  {
    title: "Rent-a-Shelf",
    description: "Your branded shelf space for regular customers",
    icon: BuildingStorefrontIcon
  },
  {
    title: "Secure Storage",
    description: "Safe and secure package storage with tracking",
    icon: LockClosedIcon
  },
  {
    title: "SMS Notifications",
    description: "Automatic pickup notifications and updates",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "Extended Hours",
    description: "Most stations open 8AM-8PM daily",
    icon: ClockIcon
  },
  {
    title: "Multiple Payment",
    description: "Cash, M-Pesa, and card payments accepted",
    icon: CreditCardIcon
  }
]

const benefits = [
  "Quick and convenient collection",
  "Choose your preferred pickup location", 
  "Real-time tracking and notifications",
  "Secure package handling",
  "Extended operating hours",
  "Multiple payment options"
]

const testimonials = [
  {
    name: "Sarah Mwangi",
    location: "Nairobi",
    text: "The pickup process is quick and convenient. I love being able to choose where I want to collect my packages. Communication is excellent!",
    rating: 5
  },
  {
    name: "James Kiprotich", 
    location: "Eldoret",
    text: "Never been this happy about deliveries! Same-day pickup notifications and the staff is very considerate and friendly.",
    rating: 5
  },
  {
    name: "Grace Wanjiku",
    location: "Mombasa", 
    text: "These guys are on another level. You place your order today and can pick it up the next day. They keep you informed throughout!",
    rating: 5
  }
]

export default async function PickupStationsPage() {
  const data = await load<ServiceContent>('pickup')

  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        title="Click & Collect"
        subtitle="Delivery"
        description="Choose from 150+ convenient pickup locations across Kenya. Secure, fast, and reliable package collection at your preferred location."
        primaryCTA={{
          label: "Find Pickup Stations",
          href: "/pickup-stations/stations"
        }}
        secondaryCTA={{
          label: "Get Started",
          href: "/contact"
        }}
        benefits={[
          {
            icon: "TruckIcon",
            label: "Fast Delivery"
          },
          {
            icon: "ShieldCheckIcon",
            label: "Secure Storage"
          },
          {
            icon: "MapPinIcon",
            label: "150+ Locations"
          }
        ]}
        variant="secondary"
      />



      {/* Stats */}
      <Section>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-4xl font-medium lg:text-5xl">Our Network in Numbers</h2>
            <p className="text-muted-foreground">Comprehensive pickup station coverage across Kenya with reliable service and strategic locations for your business needs.</p>
          </div>

          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">150+</div>
              <p className="text-muted-foreground">Pickup Stations</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">40+</div>
              <p className="text-muted-foreground">Counties Covered</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">99%</div>
              <p className="text-muted-foreground">Service Uptime</p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How Pickup Stations Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and convenient package collection in three easy steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Choose Location</h3>
            <p className="text-muted-foreground">Select your preferred pickup station from 150+ locations across Kenya</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Get Notified</h3>
            <p className="text-muted-foreground">Receive SMS and email notifications when your package arrives</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Collect Package</h3>
            <p className="text-muted-foreground">Visit the station with your ID and collection code to pick up your package</p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-ink-100">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Choose Cossim Pickup Stations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the convenience of flexible package collection with our extensive network of secure pickup locations.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pickupStationFeatures.slice(0, 4).map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Customer Testimonials */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Cossim for their package delivery needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
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
              <CardTitle className="text-lg">How does rent-a-shelf work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Rent-a-shelf gives you dedicated branded space at our pickup stations. Perfect for businesses with regular customers in specific areas.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust Cossim for reliable pickup station services across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/pickup-stations/stations">Find Pickup Stations</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">Get Pricing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}