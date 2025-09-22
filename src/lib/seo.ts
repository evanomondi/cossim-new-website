export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cossim',
    url: 'https://www.cossim.co.ke',
    telephone: '+254746556931',
    address: { 
      '@type': 'PostalAddress', 
      addressCountry: 'KE', 
      addressLocality: 'Nairobi' 
    },
    areaServed: 'KE',
  };
}

export function serviceSchema(name: string, url: string, desc: string) {
  return { 
    '@context': 'https://schema.org', 
    '@type': 'Service', 
    name, 
    url, 
    description: desc, 
    provider: { 
      '@type': 'Organization', 
      name: 'Cossim' 
    } 
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return { 
    '@context': 'https://schema.org', 
    '@type': 'FAQPage', 
    mainEntity: items.map(i => ({ 
      '@type': 'Question', 
      name: i.q, 
      acceptedAnswer: { 
        '@type': 'Answer', 
        text: i.a 
      } 
    })) 
  };
}