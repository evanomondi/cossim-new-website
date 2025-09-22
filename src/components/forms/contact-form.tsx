'use client'

import * as React from 'react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    const fd = new FormData(e.currentTarget)
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
      }
      setSent(true)
    } catch {
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
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          rows={5}
          placeholder="Tell us your route, volume, and timelines..."
        />
      </div>
      
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}