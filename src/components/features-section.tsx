import { Card, CardContent } from '@/components/ui/card'
import { ComponentType } from 'react'

interface Feature {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

interface FeaturesSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
  className?: string
}

export default function FeaturesSection({ 
  title, 
  subtitle, 
  features, 
  className = "" 
}: FeaturesSectionProps) {
  return (
    <section className={`bg-gray-50 py-16 md:py-32 dark:bg-transparent ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-muted">
              {subtitle}
            </p>
          )}
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
                <h3 className="text-h5 transition dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-muted">
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