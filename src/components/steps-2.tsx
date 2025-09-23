export default function Steps2() {
  const steps = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your Cossim account and get verified"
    },
    {
      step: "02", 
      title: "Integrate",
      description: "Connect your systems using our API or dashboard"
    },
    {
      step: "03",
      title: "Ship",
      description: "Start sending packages with our logistics network"
    },
    {
      step: "04",
      title: "Track",
      description: "Monitor deliveries in real-time and manage your operations"
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-h2">
        Get Started in 4 Simple Steps
      </h2>
      <p className="mt-4 text-body-lg text-muted">
        Join hundreds of businesses already using Cossim
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              {step.step}
            </div>
            <h3 className="mt-4 text-h4">{step.title}</h3>
            <p className="mt-2 text-body text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}