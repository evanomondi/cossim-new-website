import dataSite from '@/content/site.json'

export const site = dataSite

export async function load<T>(p: string): Promise<T> {
  const mod = await import(`@/content/${p}.json`)
  return mod.default as T
}