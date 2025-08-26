import Image from "next/image";

export default function CTAcontact() {
    return (
        <div className="bg-white">
            <div className="mx-auto container sm:px-6 sm:py-32 lg:px-6">
                <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#ffffff" />
                                <stop offset={1} stopColor="#ffffff" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            Ready to dive in? Contact us today.
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                            Whether you have questions about our services, need a quote, or want to schedule an appointment, our team is here to help. Reach out to us via phone, email, or our online contact form, and we&apos;ll get back to you promptly.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                {' '}
                                Get started{' '}
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-100">
                                Learn more
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <Image
                            src="/assets/img/CTAimage.jpg"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                            className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/80"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}