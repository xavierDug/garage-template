"use client";

import Image from "next/image";
import { siteConfig } from "../../../site.config";
import { motion } from "framer-motion";
import CTAcontact from "@/components/CTAcontact";

export default function Services() {
    const { services } = siteConfig;
    const { links } = services;

    return (
        <main className="bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-60 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/img/CTAimage.jpg')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6 uppercase tracking-wide">
                        {links.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
                        {links.description}
                    </p>
                </div>
            </section>

            {/* Each Service as a Scrollable Section */}
            <div className="container mx-auto px-6 py-20 space-y-32">
                {links.services.map((service, idx) => (
                    <motion.section
                        key={idx}
                        id={service.id} // e.g. #brakes
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * idx }}
                        className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                            }`}
                    >
                        {/* Image */}
                        <div className="relative w-full lg:w-1/2 h-[350px] overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-400 bg-blue-400/20 p-3 rounded-full text-3xl">
                                    <service.icon />
                                </span>
                                <h2 className="text-3xl font-semibold">{service.title}</h2>
                            </div>

                            <p className="text-gray-400 mb-6">{service.description}</p>

                            {service.features && (
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, fIdx) => (
                                        <li
                                            key={fIdx}
                                            className="flex items-center gap-2 text-gray-300"
                                        >
                                            <span className="text-blue-400">•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {service.cta && (
                                <a
                                    href={service.cta.href}
                                    className="inline-block mt-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 rounded-xl font-medium transition"
                                >
                                    {service.cta.label}
                                </a>
                            )}
                        </div>
                    </motion.section>
                ))}
            </div>

            <CTAcontact />
        </main>
    );
}
