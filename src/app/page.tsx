"use client";

import { ArrowDown } from 'lucide-react';
import CTAcontact from '@/components/CTAcontact';
import { Testimonials } from '@/components/Testimonials';
import { AboutUs } from '@/components/AboutUs';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  const nextSection = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* Bouncing arrow that scrolls to section */}
      <div onClick={nextSection} className="absolute bottom-1 left-1/2 bg-white rounded-full animate-bounce p-2 cursor-pointer shadow-lg">
        <ArrowDown className="w-8 h-8 text-blue-400" />
      </div>

      <div id='services'>
        {/* Services section */}
        <ServicesSection/>
      </div>

      <AboutUs />

      <Testimonials />

      <CTAcontact />
    </>
  );
}
