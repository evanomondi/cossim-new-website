import Link from 'next/link'
import Image from 'next/image'

export default function Footer2() {
  return (
    <footer className="border-t bg-background">
      <div className="container-prose py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/cossim-logo.svg"
                alt="Cossim Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              B2B logistics in Kenya: last mile, pickup stations, warehousing.
            </p>
          </div>
          <div>
            <h3 className="text-h5">Services</h3>
            <ul className="mt-4 space-y-2">
                <li><Link href="/last-mile" className="text-body-sm text-muted hover:text-foreground">Last Mile Delivery</Link></li>
                <li><Link href="/warehousing" className="text-body-sm text-muted hover:text-foreground">Warehousing</Link></li>
                <li><Link href="/pickup-stations" className="text-body-sm text-muted hover:text-foreground">Pickup Stations</Link></li>
              </ul>
          </div>
          <div>
            <h3 className="text-h5">Company</h3>
            <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-body-sm text-muted hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="text-body-sm text-muted hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-h5">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy" className="text-body-sm text-muted hover:text-foreground">Privacy</Link></li>
                <li><Link href="/terms" className="text-body-sm text-muted hover:text-foreground">Terms</Link></li>
              </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-body-sm text-muted">&copy; 2024 Cossim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}