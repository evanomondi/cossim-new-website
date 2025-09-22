'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { X, ChevronDown } from 'lucide-react'
import type { Station } from '@/lib/geo'

interface LocationsClientProps {
  stations: Station[]
}

export default function LocationsClient({ stations }: LocationsClientProps) {
  const [q, setQ] = useState('')
  const [selectedCounty, setSelectedCounty] = useState<string>('')
  
  // Get unique counties from stations data
  const counties = useMemo(() => {
    const uniqueCounties = Array.from(new Set(
      stations
        .map(station => station.county)
        .filter(county => county && county.trim() !== '')
    )).sort()
    return uniqueCounties
  }, [stations])
  
  const list = useMemo(() => {
    const s = q.toLowerCase()
    return stations
      .filter(r => {
        // Text search filter
        const matchesSearch = !q || (
          (r.name || '').toLowerCase().includes(s) || 
          (r.city || '').toLowerCase().includes(s) || 
          (r.county || '').toLowerCase().includes(s)
        )
        
        // County filter
        const matchesCounty = !selectedCounty || r.county === selectedCounty
        
        return matchesSearch && matchesCounty
      })
      .slice(0, 500)
  }, [q, selectedCounty, stations])

  const clearFilters = () => {
    setQ('')
    setSelectedCounty('')
  }

  const hasActiveFilters = q || selectedCounty

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input 
          placeholder="Search stations…" 
          value={q} 
          onChange={e => setQ(e.target.value)}
          className="max-w-md"
        />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-xs justify-between">
              {selectedCounty || "Filter by county"}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full bg-white border shadow-lg">
            <DropdownMenuItem onClick={() => setSelectedCounty("")}>
              All Counties
            </DropdownMenuItem>
            {counties.map(county => (
              <DropdownMenuItem key={county} onClick={() => setSelectedCounty(county || "")}>
                {county}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Clear filters
          </Button>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {list.length} of {stations.length} stations
          {selectedCounty && (
            <span className="ml-2">
              in <Badge variant="secondary" className="text-xs">{selectedCounty}</Badge>
            </span>
          )}
        </div>
        
        {hasActiveFilters && (
          <div className="flex gap-2">
            {q && (
              <Badge variant="outline" className="text-xs">
                Search: &ldquo;{q}&rdquo;
              </Badge>
            )}
            {selectedCounty && (
              <Badge variant="outline" className="text-xs">
                County: {selectedCounty}
              </Badge>
            )}
          </div>
        )}
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
      
      {list.length === 0 && hasActiveFilters && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            No stations found matching your filters
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
      
      {list.length === 0 && !hasActiveFilters && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No stations available</p>
        </div>
      )}
    </div>
  )
}