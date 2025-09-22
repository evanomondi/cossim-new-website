'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Package, MapPin, Clock, CheckCircle } from 'lucide-react'

interface TimelineEvent {
  status: string
  date: string
  time: string
  completed: boolean
}

interface TrackingResult {
  trackingNumber: string
  status: string
  estimatedDelivery: string
  currentLocation: string
  timeline: TimelineEvent[]
}

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: 'In Transit',
        estimatedDelivery: '2024-01-25',
        currentLocation: 'Nairobi Distribution Center',
        timeline: [
          { status: 'Order Placed', date: '2024-01-20', time: '10:30 AM', completed: true },
          { status: 'Package Picked Up', date: '2024-01-21', time: '2:15 PM', completed: true },
          { status: 'In Transit', date: '2024-01-22', time: '9:00 AM', completed: true },
          { status: 'Out for Delivery', date: '2024-01-25', time: 'Pending', completed: false },
          { status: 'Delivered', date: '2024-01-25', time: 'Pending', completed: false }
        ]
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Track Your Package</h1>
          <p className="text-lg text-muted-foreground">
            Enter your tracking number to get real-time updates on your shipment
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Package Tracking
            </CardTitle>
            <CardDescription>
              Enter your tracking number to see the current status and location of your package
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number (e.g., CS123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Button onClick={handleTrack} disabled={isLoading}>
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Search className="h-4 w-4" />
                )}
                {isLoading ? 'Tracking...' : 'Track'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {trackingResult && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Results</CardTitle>
                <CardDescription>Tracking Number: {trackingResult.trackingNumber}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Status</p>
                      <p className="text-sm text-muted-foreground">{trackingResult.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Current Location</p>
                      <p className="text-sm text-muted-foreground">{trackingResult.currentLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tracking Timeline</CardTitle>
                <CardDescription>Follow your package journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingResult.timeline.map((event: TimelineEvent, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${event.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <CheckCircle className={`h-4 w-4 ${event.completed ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className={`font-semibold ${event.completed ? 'text-green-600' : 'text-gray-500'}`}>
                              {event.status}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {event.date} {event.time !== 'Pending' && `at ${event.time}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you can't find your tracking number or need assistance, please contact our support team.
            </p>
            <div className="flex gap-4">
              <Button variant="outline">
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline">
                <a href="tel:+254746556931">Call: +2547 4655 6931</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}