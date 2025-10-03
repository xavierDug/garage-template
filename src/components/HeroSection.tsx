"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../site.config";
import { motion } from "framer-motion";

interface HeroSectionProps {
    variant?: "image" | "video"; // optional, defaults to config
}

export default function HeroSection({ variant }: HeroSectionProps) {
    const hero = siteConfig.hero;
    const [progress, setProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const finalVariant = variant || hero.variant;

    // IntersectionObserver for video
    useEffect(() => {
        if (finalVariant !== "video") return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [finalVariant]);

    // Play/pause video based on visibility
    useEffect(() => {
        if (finalVariant !== "video" || !videoRef.current) return;
        if (isInView) videoRef.current.play();
        else videoRef.current.pause();
    }, [isInView, finalVariant]);

    // Progress bar logic
    useEffect(() => {
        if (finalVariant !== "video") return;

        let interval: NodeJS.Timeout | null = null;
        if (isInView) {
            interval = setInterval(
                () => setProgress((prev) => (prev >= 100 ? 0 : prev + 1)),
                100
            );
        } else if (interval) clearInterval(interval);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isInView, finalVariant]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen text-white flex items-center overflow-hidden"
            style={
                finalVariant === "image"
                    ? {
                        backgroundImage: `url(${hero.background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }
                    : undefined
            }
        >
            {/* Video background */}
            {finalVariant === "video" && (
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={hero.background}
                    loop
                    muted
                    playsInline
                />
            )}

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl 2xl:text-7xl font-bold uppercase mb-4 max-w-3xl"
                >
                    {hero.title}{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 italic drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                        {hero.highlight}
                    </span>
                    .
                </motion.h1>

                {hero.subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl mb-6"
                    >
                        {hero.subtitle}
                    </motion.p>
                )}

                <div className="flex flex-wrap gap-4">
                    <Button
                        size="lg"
                        variant="outline"
                        className="group p-6 px-8 text-black cursor-pointer transition-all hover:bg-gray-200"
                    >
                        Contact us
                        <div className="inline-flex bg-blue-400 p-1 rounded-full transition-transform group-hover:scale-110 ml-2">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </Button>
                    <Button
                        size="lg"
                        className="p-6 px-8 text-white bg-blue-400 hover:bg-blue-500 cursor-pointer"
                    >
                        Our Services
                    </Button>
                </div>
            </div>

            {/* Progress bar for video */}
            {finalVariant === "video" && (
                <div className="absolute bottom-0 left-0 w-full">
                    <div
                        className="h-0.5 bg-blue-400 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {/* Bottom ticker bar */}
            <div className="mx-2 absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm border-t border-white/10 py-2 text-xs sm:text-lg tracking-wide flex justify-center gap-6 text-gray-200 uppercase">
                <span>24/7 Repairs</span>
                <span>Certified Mechanics</span>
                <span>Free Diagnostics</span>
            </div>
        </section>
    );
}
