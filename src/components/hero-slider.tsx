'use client'

import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const slides = [
  {
    id: 1,
    image: "/Slider/cossim-clickncollect-slide1.png",
    alt: "Cossim Click & Collect Service"
  },
  {
    id: 2,
    image: "/Slider/cossim-fulfillment-slide1.png", 
    alt: "Cossim Fulfillment Service"
  },
  {
    id: 3,
    image: "/Slider/cossim-lasmile-slide1.png",
    alt: "Cossim Last Mile Delivery"
  }
]

export default function HeroSlider() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

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

  return (
    <motion.div 
      className="mt-12 lg:mt-0 lg:flex-1"
      variants={illustrationVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative mx-auto max-w-2xl">
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
          className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-2 lg:p-4 flex items-center justify-center"
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
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <motion.img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="w-full h-auto rounded-2xl object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>
      </div>
    </motion.div>
  )
}