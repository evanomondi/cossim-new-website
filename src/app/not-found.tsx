import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="container-prose py-24 text-center space-y-6">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-lg text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <p className="text-muted-foreground">
        Try our home page or explore our logistics services.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/last-mile" className="text-primary hover:underline">Last Mile Delivery</Link>
          <Link href="/pickup-stations" className="text-primary hover:underline">Pickup Stations</Link>
          <Link href="/warehousing" className="text-primary hover:underline">Warehousing</Link>
          <Link href="/pickup-stations/stations" className="text-primary hover:underline">Stations</Link>
        </div>
      </div>
    </main>
  )
}