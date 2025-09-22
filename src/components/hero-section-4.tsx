import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Route } from 'next'
import LogoCloud3 from '@/components/logo-cloud-3'
import { motion } from 'framer-motion'

interface CTA {
  label: string
  href: Route | string
}

interface HeroProps {
  tagline?: string
  headline?: string
  sub?: string
  ctas?: CTA[]
}

export default function HeroSection4({ 
  tagline = "Kenya's B2B logistics partner",
  headline = "Last-mile, Pickup Stations, and Warehousing", 
  sub = "Express 1hr, same day, next day. Shelf rental and customer pickup across Kenya. Storage and fulfillment for growth.",
  ctas = [
    {label: "Get a quote", href: "/contact"},
    {label: "View services", href: "#services"}
  ]
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      <div className="container-prose">
        <div className="relative mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-1 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              {tagline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {headline}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {ctas.map((cta, index) => (
                <Link key={index} href={cta.href as Route}>
                  <Button 
                    variant={index === 0 ? "default" : "outline"}
                    size="lg"
                    className="px-6"
                  >
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="mt-12 lg:mt-0 lg:flex-1">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 flex items-center justify-center">
                <img 
                  src="/package-delivery.svg" 
                  alt="Package delivery illustration" 
                  className="w-full h-auto max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo Cloud */}
        <div className="mt-16 lg:mt-20">
          <LogoCloud3 />
        </div>
      </div>
    </section>
  )
}