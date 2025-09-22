"use client"

import { Package, Truck, MapPin, Shield, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutUsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-16 px-6">
                {/* Hero Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold lg:text-6xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        About Cossim
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We don't just move packages. We move possibilities.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            The story that started with a simple question
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed">
                            <p>
                                What if logistics could be simple? What if businesses could focus on what they do best, 
                                while someone else handled the complex dance of getting products to customers?
                            </p>
                            <p>
                                <span className="font-semibold text-orange-600">Founded in 2017</span>, Cossim began as an answer to that question. 
                                We saw businesses struggling with the last mile - that crucial final step where products 
                                reach the people who need them.
                            </p>
                            <p>
                                Today, we're Kenya's trusted logistics partner. We manage over <span className="font-semibold">150 active vehicles</span> and 
                                handle <span className="font-semibold">1,000+ parcels daily</span>. But numbers tell only part of our story.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-4 bg-gradient-to-br from-orange-50 to-red-50">
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">150+</div>
                                        <div className="text-sm text-muted-foreground">Active Fleet</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">1000+</div>
                                        <div className="text-sm text-muted-foreground">Daily Parcels</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">22+</div>
                                        <div className="text-sm text-muted-foreground">Pickup Stations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">7+</div>
                                        <div className="text-sm text-muted-foreground">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Values */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            What drives us forward
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our mission is simple: optimize last-mile solutions so businesses can grow without limits.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Clock className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold">Speed</h3>
                            <p className="text-muted-foreground">
                                Time matters. Every minute counts when your customers are waiting. 
                                We deliver fast because your reputation depends on it.
                            </p>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Shield className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold">Safety</h3>
                            <p className="text-muted-foreground">
                                Your products are precious cargo. We treat them with the care they deserve, 
                                ensuring they arrive in perfect condition.
                            </p>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Users className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold">Reliability</h3>
                            <p className="text-muted-foreground">
                                Promises kept. Deadlines met. Trust earned. We do what we say we'll do, 
                                when we say we'll do it.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What Makes Us Different */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold lg:text-4xl">
                                Why businesses choose Cossim
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We're not just another logistics company. We're your growth partner.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Package className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Largest Heavy Goods Provider</h3>
                                        <p className="text-muted-foreground">
                                            When size matters, we deliver. From furniture to machinery, 
                                            we handle what others can't.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Truck className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Expedited Shipments Leader</h3>
                                        <p className="text-muted-foreground">
                                            When urgent means urgent, we respond. Our expedited service 
                                            turns impossible deadlines into delivered promises.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
                                        <p className="text-muted-foreground">
                                            From Nairobi to Mombasa, Kisumu to Eldoret. Our 22+ pickup stations 
                                            mean we're always close to your customers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Shield className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-2">100% Compensation Guarantee</h3>
                                        <p className="text-muted-foreground">
                                            We stand behind every delivery. Full compensation for loss or damage 
                                            because your trust is our most valuable asset.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Promise */}
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold lg:text-4xl">
                        Our promise to you
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
                            "At Cossim, we prioritize treating our clients with care and respect. 
                            We believe in tailoring our last mile logistics solutions to meet their unique needs, 
                            maintaining transparency and open communication, and providing expert guidance 
                            to help them achieve their goals."
                        </blockquote>
                    </div>
                    <div className="pt-6">
                        <p className="text-lg">
                            <span className="font-semibold">We think about logistics, so you don't have to.</span>
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            Ready to grow your business?
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Join hundreds of businesses who trust Cossim with their logistics. 
                            Let's move your business forward, together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                Get Started Today
                            </button>
                            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}