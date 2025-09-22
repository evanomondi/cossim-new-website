import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero1() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                Ship 10x Faster with Cossim
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg">
                Kenya&apos;s most reliable B2B logistics platform. Last mile delivery, pickup stations, and warehousing solutions that scale with your business.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="px-5 text-base">
                  <Link href="#contact">
                    <span className="text-nowrap">Start Shipping</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="px-5 text-base">
                  <Link href="#pricing">
                    <span className="text-nowrap">View Pricing</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="-z-10 order-first ml-auto h-56 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-8xl opacity-20">🚚</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-ink-100 pb-16 md:pb-32">
        <div className="group relative m-auto max-w-6xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm">Trusted by leading businesses</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <div className="flex items-center justify-center gap-8 md:gap-12 overflow-hidden">
                <div className="flex items-center justify-center min-w-0">
                  <div className="text-lg font-semibold text-muted-foreground">TechHub Kenya</div>
                </div>
                <div className="flex items-center justify-center min-w-0">
                  <div className="text-lg font-semibold text-muted-foreground">ShopSmart</div>
                </div>
                <div className="flex items-center justify-center min-w-0">
                  <div className="text-lg font-semibold text-muted-foreground">FreshMart</div>
                </div>
                <div className="flex items-center justify-center min-w-0">
                  <div className="text-lg font-semibold text-muted-foreground">AgriTech</div>
                </div>
                <div className="flex items-center justify-center min-w-0">
                  <div className="text-lg font-semibold text-muted-foreground">BuildMart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}