import { Card, CardContent } from '@/components/ui/card'

export default function Testimonials3() {
  const testimonials = [
    {
      quote: "Cossim has transformed our delivery operations. The reliability and tracking features have significantly improved our customer satisfaction.",
      author: "Sarah Mwangi",
      title: "Operations Manager",
      company: "TechHub Kenya"
    },
    {
      quote: "The pickup station network is incredible. Our customers love the convenience, and we've seen a 40% increase in order completion rates.",
      author: "James Ochieng",
      title: "E-commerce Director", 
      company: "ShopSmart"
    },
    {
      quote: "Their API integration was seamless, and the support team guided us through every step. We were up and running in just two days.",
      author: "Grace Wanjiku",
      title: "CTO",
      company: "FreshMart"
    },
    {
      quote: "The warehousing solution has helped us expand to new markets without the overhead of managing our own facilities.",
      author: "David Kimani",
      title: "Supply Chain Manager",
      company: "AgriTech Solutions"
    },
    {
      quote: "Cost-effective and reliable. Cossim has become an essential part of our business operations across all 47 counties.",
      author: "Mary Akinyi",
      title: "Logistics Coordinator",
      company: "BuildMart"
    },
    {
      quote: "The real-time tracking and analytics have given us insights we never had before. It's like having a logistics expert on our team.",
      author: "Peter Mutua",
      title: "Business Owner",
      company: "Electronics Plus"
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        What Our Customers Say
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Trusted by businesses across Kenya
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <blockquote className="text-sm italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.title}</div>
                <div className="text-muted-foreground">{testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}