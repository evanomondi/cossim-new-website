'use client'

import { Button } from '@/components/ui/button'
import { PixelBlastBackground } from '@/components/pixel-blast-background'
import { Section } from '@/components/sections'
import Link from 'next/link'
import Image from 'next/image'
import type { Route } from 'next'
import { cn } from '@/lib/utils'
import { 
  TruckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline'

// Icon mapping for Server/Client Component compatibility
const iconMap = {
  TruckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArchiveBoxIcon
} as const

type IconName = keyof typeof iconMap

interface ServiceHeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  benefits?: Array<{
    icon: IconName
    label: string
  }>
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  backgroundImage?: {
    src: string
    alt: string
  }
}

export function ServiceHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  benefits,
  variant = 'primary',
  className,
  image,
  backgroundImage
}: ServiceHeroProps) {
  return (
    <div className={cn("relative", backgroundImage && "sticky top-0 z-10", className)}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              className="object-cover object-left"
              priority
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 z-10 bg-black/40" />
        </>
      )}
      
      {/* Content with conditional background */}
      {!backgroundImage ? (
        <PixelBlastBackground variant={variant}>
          <Section className="relative">
            <div className="relative z-10">
              <div className={cn(
                "mx-auto max-w-7xl",
                image ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : "max-w-4xl text-center"
              )}>
                <div className={cn(image ? "text-left" : "text-center")}>
                  <h1 className="text-display-sm mb-6">
                    {title}
                    {subtitle && (
                      <span className={cn(
                        'block',
                        variant === 'primary' && 'text-primary',
                        variant === 'secondary' && 'text-brand-secondary',
                        variant === 'accent' && 'text-accent'
                      )}>
                        {subtitle}
                      </span>
                    )}
                  </h1>
                  <p className={cn(
                    "text-body-lg text-muted mb-8",
                    image ? "max-w-none" : "max-w-2xl mx-auto"
                  )}>
                    {description}
                  </p>
                  <div className={cn(
                    "flex flex-col sm:flex-row gap-4 mb-12",
                    image ? "justify-start" : "justify-center"
                  )}>
                    <Button size="lg" className="text-lg px-8 py-6" asChild>
                      <Link href={primaryCTA.href as Route}>{primaryCTA.label}</Link>
                    </Button>
                    {secondaryCTA && (
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                        <Link href={secondaryCTA.href as Route}>{secondaryCTA.label}</Link>
                      </Button>
                    )}
                  </div>
                  
                  {/* Quick Benefits */}
                  {benefits && benefits.length > 0 && (
                    <div className={cn(
                      "grid gap-6",
                      image ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto"
                    )}>
                      {benefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon]
                        return (
                          <div 
                            key={index}
                            className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur"
                          >
                            <IconComponent className={cn(
                              'w-6 h-6',
                              variant === 'primary' && 'text-primary',
                              variant === 'secondary' && 'text-brand-secondary',
                              variant === 'accent' && 'text-accent'
                            )} />
                            <span className="font-medium">{benefit.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                
                {/* Image Section */}
                {image && (
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 600}
                        height={image.height || 400}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Section>
        </PixelBlastBackground>
      ) : (
         <Section className="relative z-20 min-h-[80vh] flex items-center">
           <div className="mx-auto max-w-4xl text-center">
             <h1 className="text-display-sm mb-6 text-white font-bold">
               {title}
               {subtitle && (
                 <span className="block text-primary font-semibold">
                   {subtitle}
                 </span>
               )}
             </h1>
             <p className="text-body-lg mb-8 max-w-2xl mx-auto text-white/95 font-medium">
               {description}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
               <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                 <Link href={primaryCTA.href as Route}>{primaryCTA.label}</Link>
               </Button>
               {secondaryCTA && (
                 <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/95 border-white text-primary hover:bg-white hover:text-primary/90 font-semibold" asChild>
                   <Link href={secondaryCTA.href as Route}>{secondaryCTA.label}</Link>
                 </Button>
               )}
             </div>
             
             {/* Quick Benefits */}
             {benefits && benefits.length > 0 && (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                 {benefits.map((benefit, index) => {
                   const IconComponent = iconMap[benefit.icon]
                   return (
                     <div 
                       key={index}
                       className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/95 backdrop-blur border border-white/30 shadow-lg"
                     >
                       <IconComponent className="w-6 h-6 text-primary" />
                       <span className="font-semibold text-ink-900">{benefit.label}</span>
                     </div>
                   )
                 })}
               </div>
             )}
           </div>
         </Section>
       )}
    </div>
  )
}