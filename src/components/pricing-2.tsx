import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Pricing2() {
  const plans = [
    {
      name: "Starter",
      price: "KSh 5,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 deliveries/month",
        "Basic tracking",
        "Email support",
        "Dashboard access"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "KSh 15,000", 
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 500 deliveries/month",
        "Advanced tracking & analytics",
        "Priority support",
        "API access",
        "Custom pickup stations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Unlimited deliveries",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "White-label solutions"
      ],
      popular: false
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Choose the plan that fits your business needs
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}