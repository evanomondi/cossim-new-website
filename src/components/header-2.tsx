'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Package } from 'lucide-react'

export default function Header2() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-prose flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/cossim-logo.svg"
              alt="Cossim Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/last-mile">Last Mile</Link>
            <Link href="/pickup-stations">Pickup Stations</Link>
            <Link href="/warehousing">Warehousing and Fulfillment</Link>
            <Link href="/track" className="flex items-center gap-1">
              <Package className="h-4 w-4" />
              Track Package
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Button size="sm" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}