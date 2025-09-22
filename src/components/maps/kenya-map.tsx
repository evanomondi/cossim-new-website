import { loadLocations } from '@/lib/geo'

export default async function KenyaMap() {
  const data = await loadLocations()
  
  return (
    <div className="w-full h-96 bg-ink-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="text-lg font-semibold mb-2">Kenya Coverage Map</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {data.stations.length} pickup stations across Kenya
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium">Major Cities</div>
            <div className="text-muted-foreground">Nairobi, Mombasa, Kisumu</div>
          </div>
          <div>
            <div className="font-medium">Counties</div>
            <div className="text-muted-foreground">15+ counties covered</div>
          </div>
        </div>
      </div>
    </div>
  )
}