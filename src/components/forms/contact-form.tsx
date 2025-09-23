'use client'

import * as React from 'react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState('')
  const [companySize, setCompanySize] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    const fd = new FormData(e.currentTarget)
    // Add the select values to form data
    if (service) fd.append('service', service)
    if (companySize) fd.append('company_size', companySize)
    
    const payload = Object.fromEntries(fd.entries())
    const mode = process.env.NEXT_PUBLIC_FORM_MODE || 'nocode'
    
    try {
      if (mode === 'nocode') {
        const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || ''
        if (!endpoint) throw new Error('Missing endpoint')
        await fetch(endpoint, { method: 'POST', body: fd })
      } else if (mode === 'resend') {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      } else if (mode === 'sheets') {
        // Submit to Google Sheets
        const response = await fetch('/api/sheets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            phone: payload.phone || '',
            company: payload.company || '',
            service: payload.service || '',
            companySize: payload.company_size || '',
            message: payload.message
          })
        })
        
        if (!response.ok) {
          throw new Error('Failed to submit to Google Sheets')
        }
      }
      setSent(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <p className="text-green-700 text-lg">
          Thanks — we will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input 
        type="text" 
        name="_honeypot" 
        className="hidden" 
        tabIndex={-1} 
        aria-hidden="true" 
      />
      
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your company name" />
      </div>
      
      <div>
        <Label htmlFor="service">Service Interest</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-mile">Last Mile Delivery</SelectItem>
            <SelectItem value="warehousing-shared">Warehousing - Shared Space</SelectItem>
            <SelectItem value="warehousing-dedicated">Warehousing - Dedicated Space</SelectItem>
            <SelectItem value="warehousing-fulfillment">Warehousing - Full Fulfillment Center</SelectItem>
            <SelectItem value="pickup-stations">Pickup Stations</SelectItem>
            <SelectItem value="rent-a-shelf">Rent-a-Shelf</SelectItem>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="company-size">Company Size</Label>
        <Select value={companySize} onValueChange={setCompanySize}>
          <SelectTrigger>
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
            <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
            <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
            <SelectItem value="large">Large Business (200+ employees)</SelectItem>
            <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          rows={5}
          placeholder="Tell us your route, volume, timelines, and any specific requirements..."
        />
      </div>
      
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}