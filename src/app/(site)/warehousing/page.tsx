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
  ArchiveBoxIcon,
  BuildingOffice2Icon,
  TruckIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LinkIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const warehousingFeatures = [
  {
    title: "Smart Inventory Control",
    description: "Track every item in real-time. Know exactly what you have, where it is, and when to reorder.",
    icon: ArchiveBoxIcon
  },
  {
    title: "Pick and Pack Excellence",
    description: "We pick the right product, pack it safely, and ship it fast. 99.99% accuracy guaranteed.",
    icon: TruckIcon
  },
  {
    title: "Same-Day Processing",
    description: "Orders received by 2 PM ship the same day. Your customers get their products faster.",
    icon: ClockIcon
  },
  {
    title: "Secure Climate Storage",
    description: "24/7 security, climate control, and FDA-registered facilities protect your investment.",
    icon: ShieldCheckIcon
  },
  {
    title: "Cost-Effective Solutions",
    description: "Save up to 37% compared to other fulfillment providers. More profit in your pocket.",
    icon: CurrencyDollarIcon
  },
  {
    title: "Seamless Integration",
    description: "Connect your store in minutes. Works with Shopify, WooCommerce, Amazon, and 70+ platforms.",
    icon: LinkIcon
  }
]

export default async function WarehousingPage() {
  const data = await load<ServiceContent>('warehousing')
  
  return (
    <main>
      <Section>
        <SectionHeading title="Warehousing and Fulfillment That Actually Works" sub="Stop worrying about storage, picking, packing, and shipping. We handle it all so you can focus on what matters: growing your business." />
      </Section>

      {/* Hero Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">Here's the thing about order fulfillment:</h2>
            <p className="text-lg mb-4">
              Every successful business reaches a point where storing products in your garage, spare room, or office becomes impossible. 
              You need space. You need systems. You need people who know how to pick the right product, pack it properly, and get it to your customer fast.
            </p>
            <p className="text-lg mb-4">
              That's where we come in. We're not just a warehouse - we're your fulfillment partner. 
              When a customer clicks "buy" on your website, we spring into action. We find their product, pack it with care, and ship it the same day.
            </p>
            <p className="text-lg mb-6">
              <strong>The result?</strong> Happy customers who get their orders fast. More time for you to focus on marketing, product development, and growth. 
              And peace of mind knowing that 99.99% of orders go out correctly.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">What is Order Fulfillment?</h3>
              <p className="mb-3">
                Order fulfillment is everything that happens after someone buys from you. It includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Receiving:</strong> Getting your products into our warehouse and scanning them into our system</li>
                <li><strong>Storage:</strong> Keeping your products safe, organized, and ready to ship</li>
                <li><strong>Picking:</strong> Finding the exact items a customer ordered</li>
                <li><strong>Packing:</strong> Putting items in the right box with proper protection</li>
                <li><strong>Shipping:</strong> Getting packages to customers quickly and safely</li>
                <li><strong>Returns:</strong> Handling products that come back and getting them ready to sell again</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Service Tiers */}
      <Section className="bg-ink-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Choose Your Fulfillment Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            From startup to enterprise, we have the right solution for your business
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Shared Fulfillment</CardTitle>
              <CardDescription>Perfect for startups and small businesses. Share warehouse space and costs while getting professional fulfillment services.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 mb-4">
                <li>• Shared warehouse space</li>
                <li>• Same-day processing</li>
                <li>• Real-time inventory tracking</li>
                <li>• Multi-channel integration</li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dedicated Space</CardTitle>
              <CardDescription>Your own section of our warehouse. More control, dedicated staff, and custom processes for growing businesses.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 mb-4">
                <li>• Dedicated warehouse section</li>
                <li>• Custom packaging options</li>
                <li>• Kitting and assembly services</li>
                <li>• Priority processing</li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Full Fulfillment Center</CardTitle>
                <Badge>Enterprise</Badge>
              </div>
              <CardDescription>Complete fulfillment operation with dedicated staff, custom processes, and enterprise-level support.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 mb-4">
                <li>• Dedicated fulfillment center</li>
                <li>• Custom workflows and processes</li>
                <li>• B2B and retail distribution</li>
                <li>• Dedicated account management</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Features */}
      <FeaturesSection 
        title="Why Businesses Choose Our Fulfillment Services"
        features={warehousingFeatures}
      />

      {/* Process */}
      <Section className="bg-ink-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            From Your Warehouse to Your Customer's Door
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 4-step process ensures your products reach customers quickly and safely
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Receiving</h3>
            <p className="text-muted-foreground">We inspect, scan, and store your products the same day they arrive. Every item gets a unique location for fast picking.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-muted-foreground">Watch your inventory levels, track depletion rates, and get alerts when it's time to reorder. All in one dashboard.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect Picking</h3>
            <p className="text-muted-foreground">Our team picks the right product, packs it in the optimal box size, and double-checks everything before shipping.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
              04
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Same-day shipping to multiple carriers. Your customers get tracking info immediately and packages arrive fast.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Common Questions About Order Fulfillment
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our warehousing and fulfillment services
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How fast do you process orders?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Orders received by 2 PM ship the same day. We process 99.8% of all orders within 24 hours of receiving them. Your customers get tracking information immediately.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What happens if you make a mistake?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We ship the correct product 99.99% of the time. If we make an error, we fix it immediately at no cost to you. We also have insurance to cover any damaged or lost items.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can you integrate with my online store?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Yes! We integrate with Shopify, WooCommerce, Magento, Amazon, eBay, and 70+ other platforms. Setup takes just a few minutes, and orders flow automatically to our system.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do you handle returns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our returns team inspects every returned item and gets sellable products back on the shelf quickly. We provide detailed reports and photos of returned items so you know exactly what happened.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What are your warehouse locations?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We have strategically located warehouses in Nairobi, Mombasa, and Kisumu. This network allows us to reach 95% of Kenya within 24 hours and reduces shipping costs for your customers.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much does fulfillment cost?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our pricing is transparent with no hidden fees. You pay for storage space, picking and packing, and shipping. Most businesses save 20-40% compared to handling fulfillment themselves. Contact us for a custom quote.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-ink-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Stop Worrying About Fulfillment?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses who trust us with their order fulfillment. 
            Same-day processing, 99.99% accuracy, and transparent pricing. 
            <strong> Your customers will notice the difference.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pickup-stations">See Our Locations</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No setup fees • No long-term contracts • Free integration support
          </p>
        </div>
      </Section>
    </main>
  )
}