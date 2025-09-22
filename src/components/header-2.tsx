'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet'
import { Package, ChevronDown, Menu } from 'lucide-react'

export default function Header2() {
  const [isOpen, setIsOpen] = React.useState(false)

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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium mr-4">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
                Services
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/last-mile" className="w-full">
                    Last Mile Delivery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pickup-stations" className="w-full">
                    Pickup Stations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/warehousing" className="w-full">
                    Warehousing & Fulfillment
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/track" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Package className="h-4 w-4" />
              Track Package
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button size="sm" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 items-center justify-end space-x-2">
          <Button size="sm" asChild className="mr-2">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link 
                  href="/about" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-medium text-muted-foreground">Services</div>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/last-mile" 
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Last Mile Delivery
                    </Link>
                    <Link 
                      href="/pickup-stations" 
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Pickup Stations
                    </Link>
                    <Link 
                      href="/warehousing" 
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Warehousing & Fulfillment
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/track" 
                  className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Package className="h-5 w-5" />
                  Track Package
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}