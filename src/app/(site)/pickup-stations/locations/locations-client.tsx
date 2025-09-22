'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import type { Station } from '@/lib/geo'

interface LocationsClientProps {
  stations: Station[]
}

export default function LocationsClient({ stations }: LocationsClientProps) {
  const [q, setQ] = useState('')
  
  const list = useMemo(() => {
    const s = q.toLowerCase()
    return stations
      .filter(r => 
        (r.name || '').toLowerCase().includes(s) || 
        (r.city || '').toLowerCase().includes(s) || 
        (r.county || '').toLowerCase().includes(s)
      )
      .slice(0, 500)
  }, [q, stations])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input 
          placeholder="Search stations…" 
          value={q} 
          onChange={e => setQ(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-muted-foreground">
          {list.length} of {stations.length} stations
        </div>
      </div>
      
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((r, i) => (
          <li key={i} className="rounded-xl border p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm">{r.name}</h3>
              {r.shelf && (
                <Badge variant="secondary" className="text-xs">
                  Rent-a-shelf
                </Badge>
              )}
            </div>
            
            {r.address && (
              <p className="text-sm text-ink-600 mb-1">{r.address}</p>
            )}
            
            <p className="text-sm text-ink-600 mb-2">
              {r.city}{r.city && r.county ? ', ' : ''}{r.county}
            </p>
            
            {r.phone && (
              <p className="text-sm font-medium text-primary">{r.phone}</p>
            )}
            
            {r.hours && (
              <p className="text-xs text-muted-foreground mt-1">{r.hours}</p>
            )}
          </li>
        ))}
      </ul>
      
      {list.length === 0 && q && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No stations found matching &ldquo;{q}&rdquo;</p>
        </div>
      )}
    </div>
  )
}