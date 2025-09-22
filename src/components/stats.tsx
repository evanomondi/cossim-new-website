export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl text-primary">Cossim in numbers</h2>
                    <p className="text-muted-foreground">Trusted by businesses across Kenya for reliable logistics solutions. Our network continues to grow, delivering excellence in every mile.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary">98%</div>
                        <p className="text-muted-foreground">Average on-time delivery</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary">150+</div>
                        <p className="text-muted-foreground">Pickup stations nationwide</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary">40+</div>
                        <p className="text-muted-foreground">Counties covered</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
