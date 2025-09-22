import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud3() {
  const customers = [
    {
      name: "Anytime",
      logo: "/customer-logos/Anytime.jpg"
    },
    {
      name: "Bolt",
      logo: "/customer-logos/Bolt.jpg"
    },
    {
      name: "Jumia Food",
      logo: "/customer-logos/jumia-food.jpg"
    },
    {
      name: "Jumia",
      logo: "/customer-logos/Jumia.jpg"
    },
    {
      name: "Kasha",
      logo: "/customer-logos/Kasha.jpg"
    },
    {
      name: "Kilimal",
      logo: "/customer-logos/Kilimal.jpg"
    },
    {
      name: "Kwanza Tukule",
      logo: "/customer-logos/Kwanza-Tukule.jpg"
    },
    {
      name: "Kwik Basket",
      logo: "/customer-logos/kwikbasket.jpg"
    },
    {
      name: "Momentum Distillers",
      logo: "/customer-logos/Momentum distilers.jpg"
    }
  ]

  return (
    <section className="bg-background">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-muted-foreground mb-12">
            Join hundreds of companies already using Cossim for their logistics needs
          </p>
        </div>
        
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering Kenya&apos;s logistics</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
            >
              {customers.map((customer, index) => (
                <div key={index} className="flex">
                  <Image
                    className="mx-auto h-8 w-fit grayscale hover:grayscale-0 transition-all duration-300"
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    width={120}
                    height={32}
                  />
                </div>
              ))}
            </InfiniteSlider>
            <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}