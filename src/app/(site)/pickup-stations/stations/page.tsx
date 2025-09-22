import { loadLocations } from '@/lib/geo'
import { Section } from '@/components/sections'
import LocationsClient from './locations-client'

export default async function Page() {
  const data = await loadLocations()
  
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-2">Pickup Stations</h1>
        <p className="text-ink-600 mb-6">Find pickup stations by name, city, or county.</p>
        <LocationsClient stations={data.stations || []} />
      </Section>
    </main>
  )
}