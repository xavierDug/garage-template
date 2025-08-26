"use client";

import Header from '../components/Header';
import { Footer7 } from '@/components/Footer';
import HeroSection from '../components/HeroSection';
import { ArrowDown } from 'lucide-react';
import { ServiceCardLinks } from '@/components/ServiceCardLinks';
import { ServiceCardNoLinks } from '@/components/ServiceCardNoLinks';
import CTAcontact from '@/components/CTAcontact';
import { Testimonials } from '@/components/Testimonials';
import { AboutUs } from '@/components/AboutUs';

export default function Home() {
  const nextSection = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection subtitle="Expertise, Transparence, Qualité" background='/assets/video/garage-video.mp4' />
      <div onClick={nextSection} className="absolute bottom-1 left-1/2 bg-white rounded-full animate-bounce p-2 cursor-pointer shadow-lg">
        <ArrowDown className="w-8 h-8 text-blue-400" />
      </div>

      <div id='services'>
        {/* For when theres a "Services" page (links) */}
        <ServiceCardLinks />

        {/* For when theres no "Services" page (all in home) */}
        {/* <ServiceCardNoLinks /> */}
      </div>

      <AboutUs />

      <Testimonials />

      <CTAcontact />
    </>
  );
}
