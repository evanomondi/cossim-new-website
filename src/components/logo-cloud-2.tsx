export default function LogoCloud2() {
  const customerLogos = [
    { name: 'Jumia', src: '/customer-logos/Jumia.jpg' },
    { name: 'Jumia Food', src: '/customer-logos/jumia-food.jpg' },
    { name: 'Bolt', src: '/customer-logos/Bolt.jpg' },
    { name: 'Anytime', src: '/customer-logos/Anytime.jpg' },
    { name: 'Kasha', src: '/customer-logos/Kasha.jpg' },
    { name: 'Kilimal', src: '/customer-logos/Kilimal.jpg' },
    { name: 'Kwanza Tukule', src: '/customer-logos/Kwanza-Tukule.jpg' },
    { name: 'Kwik Basket', src: '/customer-logos/kwikbasket.jpg' },
    { name: 'Momentum Distillers', src: '/customer-logos/Momentum distilers.jpg' }
  ]

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
        Trusted by Leading Businesses
      </h2>
      <p className="text-muted-foreground mb-12">
        Join hundreds of businesses already using Cossim
      </p>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-6 items-center justify-items-center">
        {customerLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              src={logo.src}
              alt={`${logo.name} Logo`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}