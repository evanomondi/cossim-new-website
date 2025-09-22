import { Section } from '@/components/sections'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import ContentSection from '@/components/content-7'
import { ServiceHero } from '@/components/service-hero'

import { 
  MapPinIcon,
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PhoneIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const logisticsServices = [
  {
    title: "First Mile Collection",
    description: "We pick up your goods from your warehouse or business location",
    icon: TruckIcon
  },
  {
    title: "Middle Mile Transport",
    description: "Efficient movement between distribution centers and hubs",
    icon: MapPinIcon
  },
  {
    title: "Last Mile Delivery",
    description: "Direct delivery to your customers' doorsteps",
    icon: GlobeAltIcon
  },
  {
    title: "Dedicated Riders",
    description: "Professional riders assigned to your business needs",
    icon: UserGroupIcon
  },
  {
    title: "Van Services",
    description: "Larger capacity vehicles for bulk deliveries",
    icon: TruckIcon
  },
  {
    title: "Same-Day Delivery",
    description: "Express delivery within the same business day",
    icon: ClockIcon
  }
]

export default async function LastMilePage() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Complete Logistics"
        subtitle="Solutions"
        description="From first mile to last mile delivery, we provide end-to-end logistics solutions that keep your business moving forward across Kenya."
        primaryCTA={{
          label: "Request Delivery",
          href: "/contact"
        }}
        secondaryCTA={{
          label: "Track Package", 
          href: "/track"
        }}
        benefits={[
          {
            icon: "TruckIcon",
            label: "Fast Delivery"
          },
          {
            icon: "ShieldCheckIcon",
            label: "Full Coverage"
          },
          {
            icon: "MapPinIcon",
            label: "Complete Solutions"
          }
        ]}
        variant="primary"
      />

      {/* Content Section with logistics overview */}
      <ContentSection />

      {/* Service Types */}
      <Section className="py-16 bg-ink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Our Logistics Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We provide complete logistics solutions that cover every step of your supply chain. 
              From collecting goods at your location to delivering them to your customers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logisticsServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Dedicated Services Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Dedicated Rider & Van Services</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get your own dedicated delivery team. Our riders and van drivers work exclusively 
                  for your business during assigned hours. This means faster delivery times and 
                  better service for your customers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <UserGroupIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Professional Riders</h3>
                      <p className="text-sm text-muted-foreground">Trained delivery professionals who understand your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TruckIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Van Fleet</h3>
                      <p className="text-sm text-muted-foreground">Larger vehicles for bulk deliveries and special cargo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Flexible Hours</h3>
                      <p className="text-sm text-muted-foreground">Choose the hours that work best for your business operations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Service Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Consistent delivery quality
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Better customer relationships
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Real-time delivery updates
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Reduced delivery costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Logistics Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ShieldCheckIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
                <p className="text-muted-foreground">99.5% on-time delivery rate with real-time tracking and updates</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">Transparent pricing with no hidden fees and bulk delivery discounts</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PhoneIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock customer support for all your delivery needs</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is the difference between first, middle, and last mile?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    First mile is picking up goods from your location. Middle mile moves goods between 
                    warehouses and distribution centers. Last mile delivers directly to your customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do dedicated rider services work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You get assigned riders who work exclusively for your business during set hours. 
                    They learn your routes, customers, and delivery preferences for better service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What size packages can your vans handle?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our vans can carry packages up to 1000kg and handle bulk deliveries. 
                    Perfect for furniture, appliances, and large business orders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide same-day delivery?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer same-day delivery within Nairobi and select towns. 
                    Orders placed before 2 PM can be delivered the same day.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do you track deliveries?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All deliveries are tracked in real-time. You and your customers get SMS updates 
                    and can track packages online from pickup to delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Logistics Partnership</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to improve your delivery operations? Get in touch with our team to discuss 
            your logistics needs and find the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/pickup-stations">Find Pickup Stations</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}