export default function TermsPage() {
  return (
    <main className="container-prose py-16 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Service Scope</h2>
        <p>Cossim provides B2B logistics services in Kenya including last-mile delivery, pickup stations, and warehousing solutions.</p>
        <p>Services are available across all 47 counties in Kenya. Delivery times and availability may vary by location.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Service Agreement</h2>
        <p>By using our services, you agree to provide accurate information and comply with our operational requirements.</p>
        <p>Service rates and terms are confirmed in writing before service begins. Changes require mutual agreement.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Payment Terms</h2>
        <p>Payment is due according to agreed terms, typically NET 30 for enterprise clients. We accept M-Pesa, bank transfers, and credit cards.</p>
        <p>Late payments may incur additional charges as specified in service agreements.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Liability and Insurance</h2>
        <p>We maintain insurance coverage for packages in our care. Liability is limited to the declared value of goods or actual loss, whichever is lower.</p>
        <p>We are not liable for delays due to weather, traffic, or circumstances beyond our control.</p>
        <p>Customers are responsible for proper packaging and accurate item descriptions.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Prohibited Items</h2>
        <p>We do not handle illegal items, hazardous materials, or items prohibited by Kenyan law.</p>
        <p>Perishable items require special arrangements and may have additional restrictions.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Service Modifications</h2>
        <p>We may update our services and terms with reasonable notice. Continued use constitutes acceptance of changes.</p>
        <p>Service interruptions for maintenance will be communicated in advance when possible.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>For service questions or disputes, contact us at: info@cossim.co.ke</p>
        <p>Phone: +2547 4655 6931</p>
        <p>Address: Radheshyam Godowns, Warehouse No.24 Quakers Road, Donholm Nairobi</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Governing Law</h2>
        <p>These terms are governed by Kenyan law. Disputes will be resolved through Kenyan courts or agreed arbitration.</p>
        <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>
      </section>
    </main>
  )
}