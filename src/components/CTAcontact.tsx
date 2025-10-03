import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function CTAcontact() {
    const { title, description, buttonPrimary, buttonSecondary, image, backgroundColor } = siteConfig.cta;

    return (
        <div className="bg-white">
            <div className="mx-auto container sm:px-6 sm:py-32 lg:px-6">
                <div
                    className={`relative isolate overflow-hidden ${backgroundColor} px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
                >
                    {/* radial gradient mask */}
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle
                            r={512}
                            cx={512}
                            cy={512}
                            fill="url(#cta-gradient)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="cta-gradient">
                                <stop stopColor="#ffffff" />
                                <stop offset={1} stopColor="#ffffff" />
                            </radialGradient>
                        </defs>
                    </svg>

                    {/* text + buttons */}
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            {title}
                        </h2>
                        {description && (
                            <p className="mt-6 text-lg/8 text-pretty text-gray-300">{description}</p>
                        )}
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            {buttonPrimary && (
                                <a
                                    href={buttonPrimary.url}
                                    className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {buttonPrimary.text}
                                </a>
                            )}
                            {buttonSecondary && buttonSecondary.enabled && (
                                <a
                                    href={buttonSecondary.url}
                                    className="text-sm/6 font-semibold text-white hover:text-gray-100"
                                >
                                    {buttonSecondary.text} →
                                </a>
                            )}
                        </div>
                    </div>

                    {/* image */}
                    {image?.src && (
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={1824}
                                height={1080}
                                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/80"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
