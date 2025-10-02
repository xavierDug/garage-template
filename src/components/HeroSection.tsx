"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../site.config";

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

  // Only relevant for video variant
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

  // Video controls
  useEffect(() => {
    if (finalVariant !== "video" || !videoRef.current) return;
    if (isInView) videoRef.current.play();
    else videoRef.current.pause();
  }, [isInView, finalVariant]);

  // Progress bar logic for video
  useEffect(() => {
    if (finalVariant !== "video") return;

    let interval: NodeJS.Timeout | null = null;
    if (isInView) {
      interval = setInterval(() => setProgress((prev) => (prev >= 100 ? 0 : prev + 1)), 100);
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
        <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold uppercase mb-4">
          {hero.title} <span className="text-blue-400 italic">{hero.highlight}</span>.
        </h1>
        {hero.subtitle && <p className="text-xl mb-6">{hero.subtitle}</p>}

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
    </section>
  );
}
