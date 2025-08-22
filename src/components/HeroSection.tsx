"use client";

import { ArrowDown, ArrowRight, HandHelping } from "lucide-react";
import { Progress } from "./ui/progress";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    background?: string;
}

export default function HeroSection({ title, subtitle, background }: HeroSectionProps) {
    const [progress, setProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Detect if the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 } // 50% of the section must be visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Update progress only when the section is in view
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isInView) {
            interval = setInterval(() => {
                setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
            }, 100); // Increment progress every 100ms
        } else if (interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isInView]);

    // Control video playback based on visibility
    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <section className="h-screen relative flex items-center overflow-hidden" ref={sectionRef}>
            {/* Video background */}
            {background && (
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={background}
                    loop
                    muted
                    playsInline
                />
            )}

            {/* Overlay (optional, darken the video for readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

            {/* Content */}
            <div className="relative  px-4 container mx-auto">
                <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold text-white mb-4 border-white border-8 p-4 w-fit uppercase rounded-lg">{title}</h1>
                {subtitle && <p className="text-white text-xl">{subtitle}</p>}
                <Button size={"lg"} variant="outline" className="me-2 mt-6 p-6 px-8 text-black cursor-pointer">
                    Contact us
                    <div className="inline-flex bg-blue-400 p-1 rounded-full">
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </Button>
                <Button size={"lg"} className="me-2 mt-6 p-6 px-8 text-white bg-blue-400 hover:bg-blue-500 cursor-pointer">
                    Our Services
                </Button>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <Progress value={progress} className="w-full h-0.5 rounded-none" />
            </div>
        </section>
    );
}
