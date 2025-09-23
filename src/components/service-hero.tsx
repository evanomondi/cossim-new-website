'use client'

import { Button } from '@/components/ui/button'
import { PixelBlastBackground } from '@/components/pixel-blast-background'
import { Section } from '@/components/sections'
import Link from 'next/link'
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
}

export function ServiceHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  benefits,
  variant = 'primary',
  className
}: ServiceHeroProps) {
  return (
    <PixelBlastBackground variant={variant} className={className}>
      <Section className="relative">
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
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
            <p className="text-body-lg text-muted mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
        </div>
      </Section>
    </PixelBlastBackground>
  )
}