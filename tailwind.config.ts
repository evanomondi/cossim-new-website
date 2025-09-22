import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'rgb(var(--brand-primary)/<alpha-value>)',
          secondary: 'rgb(var(--brand-secondary)/<alpha-value>)',
        },
        ink: {
          900: 'rgb(var(--ink-900)/<alpha-value>)',
          600: 'rgb(var(--ink-600)/<alpha-value>)',
          100: 'rgb(var(--ink-100)/<alpha-value>)',
        },
        accent: 'rgb(var(--accent)/<alpha-value>)',
        primary: 'rgb(var(--brand-primary)/<alpha-value>)',
        'primary-foreground': 'white',
        'muted-foreground': 'rgb(var(--ink-600)/<alpha-value>)',
        foreground: 'rgb(var(--ink-900)/<alpha-value>)',
        background: 'white',
        border: 'rgb(var(--ink-100)/<alpha-value>)',
        input: 'rgb(var(--ink-100)/<alpha-value>)',
        ring: 'rgb(var(--brand-primary)/<alpha-value>)',
      },
      fontFamily: { sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans] },
      borderRadius: { xl: '0.9rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 20px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
}

export default config