export default function Stats1() {
  const stats = [
    {
      value: "500+",
      label: "Active Businesses"
    },
    {
      value: "50K+",
      label: "Packages Delivered"
    },
    {
      value: "47",
      label: "Counties Covered"
    },
    {
      value: "99.5%",
      label: "Delivery Success Rate"
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Trusted by Businesses Across Kenya
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold text-primary">{stat.value}</div>
            <div className="mt-2 text-lg text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}