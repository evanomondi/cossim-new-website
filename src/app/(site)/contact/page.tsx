import { Section } from '@/components/sections'
import { ContactForm } from '@/components/forms/contact-form'

export default function ContactPage() {
  return (
    <main>
      <Section>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Contact Cossim</h1>
          <p className="text-ink-600 mb-8">
            Tell us your route, volume, and timelines. We&apos;ll get back to you within 24 hours with a custom quote.
          </p>
          <ContactForm />
        </div>
      </Section>
    </main>
  )
}