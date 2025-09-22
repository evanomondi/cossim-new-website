/* eslint-disable no-console */
import fs from 'node:fs/promises'
import path from 'node:path'
import { parse } from 'csv-parse/sync'
import { z } from 'zod'

const Row = z.object({
  name: z.string().min(2),
  address: z.string().optional().default(''),
  city: z.string().optional().default(''),
  county: z.string().optional().default(''),
  latitude: z.string(),
  longitude: z.string(),
  phone: z.string().optional().default(''),
  hours: z.string().optional().default(''),
  type: z.string().optional().default('station'),
  status: z.string().optional().default('active'),
  shelf_available: z.string().optional().default('')
})

function toBool(v: string) {
  const s = v.toLowerCase().trim()
  return ['yes', 'true', '1', 'y'].includes(s)
}

async function main() {
  const csvPath = process.env.LOCATIONS_CSV_PATH ?? 'src/content/locations.csv'
  const buf = await fs.readFile(csvPath)
  const records = parse(buf, { columns: true, skip_empty_lines: true, trim: true }) as any[]

  const stations = [] as any[]
  const errors = [] as string[]

  for (let i = 0; i < records.length; i++) {
    const r = records[i]
    const parsed = Row.safeParse(r)
    if (!parsed.success) {
      errors.push(`Row ${i + 2}: schema error ${parsed.error.message}`)
      continue
    }
    const row = parsed.data
    const lat = Number(row.latitude)
    const lon = Number(row.longitude)
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      errors.push(`Row ${i + 2}: invalid lat/lon`)
      continue
    }
    stations.push({
      name: row.name,
      address: row.address,
      city: row.city,
      county: row.county,
      lat,
      lon,
      phone: row.phone,
      hours: row.hours,
      type: row.type?.toLowerCase() || 'station',
      status: (row.status || 'active').toLowerCase(),
      shelf: toBool(row.shelf_available || '')
    })
  }

  const hubsCorrPath = 'src/content/locations.json'
  let hubsCorr = { hubs: [], corridors: [], stations: [] as any[] }
  try {
    const cur = JSON.parse(await fs.readFile(hubsCorrPath, 'utf8'))
    hubsCorr.hubs = cur.hubs ?? []
    hubsCorr.corridors = cur.corridors ?? []
  } catch {}

  hubsCorr.stations = stations

  await fs.writeFile(hubsCorrPath, JSON.stringify(hubsCorr, null, 2))

  console.log(`Wrote ${stations.length} stations to ${hubsCorrPath}`)
  if (errors.length) {
    console.warn(`\nValidation warnings (first 20):`)
    console.warn(errors.slice(0, 20).join('\n'))
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})