export interface HomeContent {
  tagline: string
  headline: string
  sub: string
  ctas: Array<{label: string; href: string}>
  features: string[]
  stats: Array<{label: string; value: string}>
  faqs: Array<{q: string; a: string}>
}

export interface ServiceContent {
  headline: string
  sub: string
  tiers: Array<{name: string; desc: string; cta: string}>
  faqs: Array<{q: string; a: string}>
}

export interface SiteContent {
  company: string
  phone: string
  email: string
  address: string
}