import { Truck, Clock } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
                <h2 className="relative z-10 max-w-3xl text-3xl font-medium lg:text-4xl">Our logistics network connects every mile of your supply chain.</h2>
                <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16">
                    <div className="relative space-y-6">
                        <p className="text-gray-600 text-lg">
                            Cossim provides more than just delivery services. <span className="text-blue-600 font-semibold">We offer a complete logistics ecosystem</span> that handles every step of your supply chain.
                        </p>
                        <p className="text-gray-600">From the moment goods leave your warehouse to when they reach your customers, our integrated network ensures smooth operations across all delivery stages.</p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Clock className="size-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-base font-semibold">Fast Delivery</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Same-day delivery available in major cities with real-time tracking.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Truck className="size-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-base font-semibold">Full Coverage</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Nationwide delivery network covering all 47 counties in Kenya.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 aspect-[4/3] relative rounded-2xl p-8 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                                    <Truck className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Complete Logistics</h3>
                                <p className="text-gray-600 max-w-xs">End-to-end delivery solutions for businesses of all sizes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
