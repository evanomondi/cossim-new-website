export function SectionHeading({
  title,
  sub
}: {
  title: string
  sub?: string
}) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {sub && <p className="mt-2 text-ink-600">{sub}</p>}
    </header>
  )
}