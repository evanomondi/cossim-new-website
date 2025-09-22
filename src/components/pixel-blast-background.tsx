'use client'

import { cn } from '@/lib/utils'

interface PixelBlastBackgroundProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  children?: React.ReactNode
}

export function PixelBlastBackground({ 
  className, 
  variant = 'primary',
  children 
}: PixelBlastBackgroundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'from-primary/20 via-primary/10 to-primary/5'
      case 'secondary':
        return 'from-brand-secondary/20 via-brand-secondary/10 to-brand-secondary/5'
      case 'accent':
        return 'from-accent/20 via-accent/10 to-accent/5'
      default:
        return 'from-primary/20 via-primary/10 to-primary/5'
    }
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Pixel Blast Background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pixel-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect width="20" height="20" fill="transparent" />
              <rect x="0" y="0" width="2" height="2" fill="currentColor" opacity="0.1" />
              <rect x="4" y="2" width="2" height="2" fill="currentColor" opacity="0.15" />
              <rect x="8" y="4" width="2" height="2" fill="currentColor" opacity="0.1" />
              <rect x="12" y="6" width="2" height="2" fill="currentColor" opacity="0.2" />
              <rect x="16" y="8" width="2" height="2" fill="currentColor" opacity="0.1" />
              <rect x="2" y="10" width="2" height="2" fill="currentColor" opacity="0.15" />
              <rect x="6" y="12" width="2" height="2" fill="currentColor" opacity="0.1" />
              <rect x="10" y="14" width="2" height="2" fill="currentColor" opacity="0.2" />
              <rect x="14" y="16" width="2" height="2" fill="currentColor" opacity="0.1" />
              <rect x="18" y="18" width="2" height="2" fill="currentColor" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pixel-pattern)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br',
        getVariantClasses()
      )} />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'absolute w-1 h-1 bg-current opacity-20 animate-pulse',
              variant === 'primary' && 'text-primary',
              variant === 'secondary' && 'text-brand-secondary',
              variant === 'accent' && 'text-accent'
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}