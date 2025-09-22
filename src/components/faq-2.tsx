import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq2() {
  const faqs = [
    {
      question: "What areas do you cover in Kenya?",
      answer: "We cover all 47 counties in Kenya, with extensive networks in major cities like Nairobi, Mombasa, Kisumu, and Nakuru. Our pickup stations are strategically located for maximum convenience."
    },
    {
      question: "How do I integrate Cossim with my existing systems?",
      answer: "We provide a comprehensive REST API and webhooks for seamless integration. Our technical team offers support during the integration process, and we have plugins for popular e-commerce platforms."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "Same-day delivery is available in major cities, while inter-county deliveries typically take 1-3 business days. Express options are available for urgent shipments."
    },
    {
      question: "How do you handle package security?",
      answer: "All packages are tracked with GPS, insured, and handled by verified personnel. Our warehouses have 24/7 security, and we provide real-time updates throughout the delivery process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, and credit cards. Enterprise clients can set up monthly billing arrangements with NET 30 payment terms."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer volume discounts for businesses shipping more than 1000 packages per month. Contact our sales team for custom pricing based on your specific needs."
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Everything you need to know about our logistics services
      </p>
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}