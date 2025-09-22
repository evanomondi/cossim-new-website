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
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from './ui/sheet'
import { Package, ChevronDown, Menu } from 'lucide-react'

export default function Header2() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

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
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
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
          <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-2">
          <Button size="sm" asChild className="mr-2">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-2 relative overflow-hidden transition-all duration-200 hover:bg-accent/50"
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    className={`h-5 w-5 absolute transition-all duration-300 ${
                      isOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                    }`} 
                  />
                  <div 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                    }`}
                  >
                    <div className="w-5 h-5 flex flex-col justify-center items-center">
                      <div className="w-4 h-0.5 bg-current transform rotate-45 translate-y-0.5"></div>
                      <div className="w-4 h-0.5 bg-current transform -rotate-45 -translate-y-0.5"></div>
                    </div>
                  </div>
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 backdrop-blur-md bg-background/95 border-l border-border/50"
            >
              <SheetHeader className="border-b border-border/20 pb-4">
                <SheetTitle className="text-left text-xl font-semibold">
                  Navigation Menu
                </SheetTitle>
                <SheetDescription className="text-left text-muted-foreground">
                  Access all pages and services from our mobile navigation menu.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link 
                  href="/about" 
                  className="text-lg font-medium hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                <div className="space-y-3">
                  <div className="text-lg font-medium text-muted-foreground px-3">Services</div>
                  <div className="pl-4 space-y-3">
                    <Link 
                      href="/last-mile" 
                      className="block text-base hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Last Mile Delivery
                    </Link>
                    <Link 
                      href="/pickup-stations" 
                      className="block text-base hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Pickup Stations
                    </Link>
                    <Link 
                      href="/warehousing" 
                      className="block text-base hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Warehousing & Fulfillment
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/track" 
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Package className="h-5 w-5" />
                  Track Package
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-medium hover:text-primary transition-all duration-200 hover:translate-x-1 hover:bg-accent/20 rounded-lg px-3 py-2 -mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:translate-x-1 rounded-lg px-3 py-2 -mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                
                <div className="mt-8 pt-6 border-t border-border/20">
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Get in touch
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>📧</span>
                        <span>info@cossim.co.ke</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>📞</span>
                        <span>+254</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}