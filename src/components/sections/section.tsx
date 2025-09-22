import { cn } from '@/lib/utils'

export function Section({ 
  id, 
  className, 
  children 
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20', className)}>
      <div className="container-prose">{children}</div>
    </section>
  )
}