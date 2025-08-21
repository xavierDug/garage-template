import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    background?: string;
}

export default function HeroSection({ title, subtitle, background }: HeroSectionProps) {
    return (
        <section className="h-screen relative flex items-center overflow-hidden">
            {/* Video background */}
            {background && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={background}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}

            {/* Overlay (optional, darken the video for readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

            {/* Content */}
            <div className="relative  px-4 container mx-auto">
                <h1 className="text-7xl font-bold text-white mb-4 border-white border-8 p-4 w-fit uppercase rounded-lg">{title}</h1>
                {subtitle && <p className="text-white text-xl">{subtitle}</p>}
                <button type="button" className="py-2 mt-6 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-black hover:bg-gray-200 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                    Contact us
                    <div className="inline-flex bg-blue-400 p-1 rounded-full">
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </button>
                <button type="button" className="py-2 mt-6 ms-4 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-400 text-white hover:bg-gray-200 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                    Contact us
                    <div className="inline-flex bg-blue-400 p-1 rounded-full">
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </button>
            </div>
        </section>
    );
}
