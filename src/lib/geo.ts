export type Hub = {
  name: string
  lat: number
  lon: number
  type: 'hub'
}

export type Corr = {
  name: string
  points: Array<[number, number]>
  type: 'corridor'
}

export type Station = {
  name: string
  address?: string
  city?: string
  county?: string
  lat: number
  lon: number
  phone?: string
  hours?: string
  type?: string
  status?: string
  shelf?: boolean
}

export type Locations = {
  hubs: Hub[]
  corridors: Corr[]
  stations: Station[]
}

export async function loadLocations(): Promise<Locations> {
  const mod = await import('@/content/locations.json')
  return mod.default as Locations
}