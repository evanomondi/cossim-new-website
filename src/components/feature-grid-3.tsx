import { Card, CardContent } from '@/components/ui/card'
import { 
  TruckIcon, 
  BuildingStorefrontIcon, 
  BuildingOfficeIcon,
  MapPinIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function FeatureGrid3() {
  const features = [
    {
      title: "Last Mile Delivery",
      description: "Efficient delivery solutions for your business needs",
      icon: TruckIcon
    },
    {
      title: "Pickup Stations", 
      description: "Convenient pickup locations across Kenya",
      icon: BuildingStorefrontIcon
    },
    {
      title: "Warehousing",
      description: "Secure storage and inventory management", 
      icon: BuildingOfficeIcon
    },
    {
      title: "Real-time Tracking",
      description: "Monitor your shipments every step of the way",
      icon: MapPinIcon
    },
    {
      title: "API Integration", 
      description: "Seamlessly integrate with your existing systems",
      icon: LinkIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: ChatBubbleLeftRightIcon
    }
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Logistics Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to streamline your B2B logistics operations
          </p>
        </div>
        
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="relative col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden">
                  <CardContent className="pt-6">
                    <div className="relative mx-auto flex aspect-square size-16 rounded-full border items-center justify-center mb-4 dark:border-white/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-2 text-center">
                      <h3 className="text-lg font-medium transition dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}