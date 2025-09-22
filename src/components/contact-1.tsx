import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact1() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to streamline your logistics? Contact us today to learn how Cossim can help your business grow.
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="text-primary">📧</div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-muted-foreground">info@cossim.co.ke</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-primary">📞</div>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-muted-foreground">+254 700 000 000</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-primary">📍</div>
            <div>
              <div className="font-semibold">Office</div>
              <div className="text-muted-foreground">Radheshyam Godowns, Warehouse No.24 Quakers Road, Donholm Nairobi</div>
            </div>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>
            We&apos;ll get back to you within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Your Company" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your logistics needs..."
              className="min-h-[100px]"
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  )
}