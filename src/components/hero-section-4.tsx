'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Route } from 'next'
import LogoCloud3 from '@/components/logo-cloud-3'
import { motion } from 'framer-motion'

interface CTA {
  label: string
  href: Route | string
}

interface HeroProps {
  tagline?: string
  headline?: string
  sub?: string
  ctas?: CTA[]
}

export default function HeroSection4({ 
  tagline = "Kenya's B2B logistics partner",
  headline = "Last-mile, Pickup Stations, and Warehousing", 
  sub = "Express 1hr, same day, next day. Shelf rental and customer pickup across Kenya. Storage and fulfillment for growth.",
  ctas = [
    {label: "Get a quote", href: "/contact"},
    {label: "View services", href: "#services"}
  ]
}: HeroProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const headlineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const illustrationVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8,
      rotate: 10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotate: 0
    }
  }

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: { 
      opacity: 1,
      scale: 1
    }
  }

  const logoCloudVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="container-prose">
        <motion.div 
          className="relative mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-center lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-1 lg:text-left">
            <motion.p 
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              variants={textVariants}
            >
              <motion.span
                className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {tagline}
              </motion.span>
            </motion.p>
            
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
              variants={headlineVariants}
            >
              <motion.span
                className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {headline}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              variants={textVariants}
            >
              {sub}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
            >
              {ctas.map((cta, index) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={cta.href as Route}>
                    <Button 
                      variant={index === 0 ? "default" : "outline"}
                      size="lg"
                      className="px-6 transition-all duration-300 hover:shadow-lg"
                    >
                      {cta.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Visual Element */}
          <motion.div 
            className="mt-12 lg:mt-0 lg:flex-1"
            variants={illustrationVariants}
          >
            <div className="relative mx-auto max-w-lg">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"
                variants={backgroundVariants}
                animate={{
                  rotate: [3, 6, 3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(0,0,0,0.1)",
                    "0 20px 40px rgba(0,0,0,0.15)",
                    "0 10px 25px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img 
                  src="/package-delivery.svg" 
                  alt="Package delivery illustration" 
                  className="w-full h-auto max-w-sm"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Logo Cloud */}
        <motion.div 
          className="mt-6 lg:mt-8"
          variants={logoCloudVariants}
          initial="hidden"
          animate="visible"
        >
          <LogoCloud3 />
        </motion.div>
      </div>
    </section>
  )
}