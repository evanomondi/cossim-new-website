import { Inter } from 'next/font/google'

// Primary font for headings and body text
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

// Font configuration for optimal performance and readability
export const fontConfig = {
  sans: inter,
}