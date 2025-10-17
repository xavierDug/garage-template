"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "../../site.config";

type ServicesSectionProps = {
    variant?: "links" | "noLinks";
};

export default function ServicesSection({ variant }: ServicesSectionProps) {
    const sectionConfig = siteConfig.services;
    const finalVariant = variant || sectionConfig.variant;

    if (finalVariant === "noLinks") {
        return (
            <div className="overflow-hidden bg-black py-24 sm:py-32 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-blue-400">
                                    {sectionConfig.noLinks.title}
                                </h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    {sectionConfig.noLinks.subtitle}
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-300">{sectionConfig.noLinks.description}</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                                    {sectionConfig.noLinks.features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-white">
                                                <feature.icon aria-hidden="true" className="absolute top-1 -left-1 size-7 text-blue-400" />
                                                {feature.name}
                                            </dt>{" "}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            src={sectionConfig.noLinks.image}
                            alt="Product screenshot"
                            width={2432}
                            height={1442}
                            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Default "links" variant
    return (
        <section className="relative py-32 p-6 bg-black">
            <div className="container mx-auto relative grid grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Left intro */}
                <div className="flex flex-col justify-between lg:col-span-1">
                    <div>
                        <h2 className="mb-4 text-4xl font-medium md:text-6xl text-white uppercase tracking-wide">
                            {sectionConfig.links.title}
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            {sectionConfig.links.description}
                        </p>
                        <Link href="/services">
                            <Button
                                size="lg"
                                className="mt-8 w-fit bg-blue-400 hover:bg-blue-500 transition-colors cursor-pointer"
                            >
                                View all services{" "}
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right services */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
                    {/* Featured Services (first 2) */}
                    {sectionConfig.links.services.slice(0, 2).map((service, idx) => (
                        <Link
                            key={idx}
                            href={`/services#${service.id}`}
                            className="group block overflow-hidden rounded-xl cursor-pointer relative transition-all duration-500 hover:scale-[1.02]"
                        >
                            <Card className="relative aspect-[3/4] overflow-hidden p-0 border border-gray-800 bg-gray-950 shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 group-hover:from-blue-500/30 group-hover:via-black/40 group-hover:to-black/90 transition-colors duration-500"></div>

                                <CardContent className="absolute inset-0 flex flex-col justify-start p-6 relative z-10">
                                    <div className="pr-4 text-xl font-semibold text-white flex items-center gap-2">
                                        <span className="text-2xl text-blue-400 transition-transform group-hover:rotate-12">
                                            <service.icon />
                                        </span>
                                        {service.title}
                                    </div>
                                </CardContent>

                                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-125" />
                                <div className="absolute inset-0 ring-0 ring-blue-400/40 opacity-0 group-hover:opacity-100 group-hover:ring-4 transition-all duration-500"></div>
                            </Card>
                        </Link>
                    ))}

                    {/* Secondary Services (remaining) */}
                    <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {sectionConfig.links.services.slice(2).map((service, idx) => (
                            <Link
                                key={idx + 2}
                                href={`/services#${service.id}`}
                                className="group block overflow-hidden rounded-xl cursor-pointer relative transition-all duration-500 hover:scale-[1.02]"
                            >
                                <Card className="relative aspect-[4/3] overflow-hidden p-0 border border-gray-800 bg-gray-950 shadow-md">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 group-hover:from-blue-500/30 group-hover:via-black/40 group-hover:to-black/90 transition-colors duration-500"></div>

                                    <CardContent className="absolute inset-0 flex flex-col justify-start p-4 relative z-10">
                                        <div className="pr-4 font-semibold text-white flex items-center gap-2">
                                            <span className="text-xl text-blue-400 transition-transform group-hover:rotate-12">
                                                <service.icon />
                                            </span>
                                            {service.title}
                                        </div>
                                    </CardContent>

                                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white transition-transform group-hover:scale-125" />
                                    <div className="absolute inset-0 ring-0 ring-blue-400/30 opacity-0 group-hover:opacity-100 group-hover:ring-2 transition-all duration-500"></div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
