import { MdCarRepair } from "react-icons/md";
import { FaOilCan } from "react-icons/fa6";
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import { Wrench, ShieldCheck, Clock, ThumbsUp, BadgeCheck, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// config/types.ts
export type HeroVariant = "image" | "video";
export type ServicesVariant = "links" | "noLinks";

export type AboutConfig = {
  title: string;
  description: string;
  mainImage: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  breakout?: {
    enabled: boolean;
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companies?: {
    enabled: boolean;
    title: string;
    items: Array<{ src: string; alt: string }>;
  };
  achievements?: {
    enabled: boolean;
    title: string;
    description?: string;
    items: Array<{ label: string; value: string }>;
  };
};

export type FooterConfig = {
  logo: {
    url: string;
    src: string;
    alt: string;
  };
  description?: string;
  sections: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  socialLinks: Array<{
    icon: string; // store as string key ("facebook", "instagram", etc.)
    href: string;
    label: string;
  }>;
  copyright: string;
  legalLinks: Array<{ name: string; href: string }>;
};


// config/site.config.ts

export const siteConfig = {
  general: {
    siteName: "Garage Tremblay",
    primaryColor: "blue-400",
    phone: "(514) 555-1234",
    email: "contact@garagetremblay.ca",
    address: "123 Rue Principale, Montréal, QC",
  },

  hero: {
    variant: "image" as HeroVariant,
    title: "Your Trusted Auto Repair Shop in",
    highlight: " Montréal",
    subtitle: "Quality Service, Honest Prices, Reliable Repairs, Fast Turnaround",
    background: "/assets/img/hero-bg.png",
  },

  // Services Section and services/page.tsx
  services: {
    variant: "links" as ServicesVariant,
    links: {
      title: "Our Services",
      description:
        "Explore our range of expert services designed to keep your vehicle in top condition. From routine maintenance to specialized repairs, we have you covered.",
      services: [
        {
          id: "car-repair", // used for anchor links (#car-repair)
          icon: MdCarRepair,
          title: "Car Repair",
          tag: "Engine & Body",
          description:
            "Reliable diagnostics and repairs to keep your car performing at its best. From engine issues to electrical problems, our mechanics handle it all.",
          image: "/assets/img/CardLong1.jpg",
          features: [
            "Computerized diagnostics",
            "Engine and transmission repairs",
            "Electrical system troubleshooting",
          ],
          cta: {
            label: "Book Car Repair",
            href: "mailto:garagetremblay@gmail.com?subject=Car%20Repair%20Booking",
          },
        },
        {
          id: "maintenance",
          icon: GiAutoRepair,
          title: "Auto Maintenance",
          tag: "Routine Checkups",
          description:
            "Preventive care and regular maintenance to avoid costly breakdowns and extend your car’s lifespan.",
          image: "/assets/img/CardLong2.jpg",
          features: [
            "Multi-point inspection",
            "Fluid top-ups and filter changes",
            "Battery and belt checks",
          ],
          cta: {
            label: "Schedule Maintenance",
            href: "mailto:garagetremblay@gmail.com?subject=Maintenance%20Appointment",
          },
        },
        {
          id: "oil-change",
          icon: FaOilCan,
          title: "Oil Change",
          tag: "Quick Service",
          description:
            "Fast, affordable, and professional oil changes to extend your engine’s life and improve performance.",
          image: "/assets/img/CardShort1.jpg",
          features: [
            "Premium oil brands",
            "Filter replacement included",
            "15-minute service available",
          ],
          cta: {
            label: "Book Oil Change",
            href: "mailto:garagetremblay@gmail.com?subject=Oil%20Change%20Booking",
          },
        },
        {
          id: "tires",
          icon: PiTireFill,
          title: "Tire Services",
          tag: "Wheels & Tires",
          description:
            "Rotation, balancing, and tire replacement to keep your drive safe and smooth.",
          image: "/assets/img/CardShort2.jpg",
          features: [
            "Tire rotation & balancing",
            "Seasonal tire swap",
            "New tire sales & installations",
          ],
          cta: {
            label: "Book Tire Service",
            href: "mailto:garagetremblay@gmail.com?subject=Tire%20Service%20Inquiry",
          },
        },
        {
          id: "brakes",
          icon: GiCarWheel,
          title: "Brake Repair",
          tag: "Safety First",
          description:
            "Expert brake repairs and inspections to ensure safe and confident stops every time.",
          image: "/assets/img/CardShort3.jpg",
          features: [
            "Brake pad replacement",
            "Rotor resurfacing",
            "ABS diagnostics",
          ],
          cta: {
            label: "Book Brake Inspection",
            href: "mailto:garagetremblay@gmail.com?subject=Brake%20Repair%20Appointment",
          },
        },
      ],
    },
    noLinks: {
      title: "Our Services",
      subtitle: "Comprehensive Auto Care for Every Need",
      description:
        "At Garage Tremblay, we offer a wide range of services to keep your vehicle running smoothly. Our experienced technicians are equipped to handle everything from routine maintenance to complex repairs, ensuring your car receives the best care possible.",
      image: "/assets/img/CardShort3.jpg",
      features: [
        { name: "Car Repair.", description: "Reliable diagnostics and repairs to keep your car performing at its best.", icon: MdCarRepair },
        { name: "Auto Maintenance.", description: "Preventive care and regular maintenance to avoid costly breakdowns.", icon: GiAutoRepair },
        { name: "Oil Change.", description: "Fast and professional oil changes to extend the life of your engine.", icon: FaOilCan },
      ],
    },
  },


  about: {
    title: "About Our Garage",
    description: "For over 20 years, we've been helping drivers keep their vehicles safe, reliable, and running smoothly. Our certified team works with professionalism and transparency.",
    mainImage: { src: "/assets/img/AboutImage1.jpg", alt: "Garage team" },
    secondaryImage: { src: "/assets/img/AboutImage2.jpg", alt: "Workshop" },

    breakout: {
      enabled: true,
      src: "/assets/img/repair-services-black.png",
      alt: "garage logo",
      title: "Need a reliable auto repair service?",
      description: "Get in touch with us today for expert care and transparent pricing.",
      buttonText: "Get a free quote",
      buttonUrl: "#contact",
    },

    companies: {
      enabled: true,
      title: "Auto brands we service",
      items: [
        { src: "/assets/img/BrandLogo1.png", alt: "Arc" },
        { src: "/assets/img/BrandLogo2.png", alt: "Descript" },
        { src: "/assets/img/BrandLogo3.png", alt: "Mercury" },
        { src: "/assets/img/BrandLogo4.png", alt: "Mirage" },
        { src: "/assets/img/BrandLogo5.png", alt: "Rewind" },
        { src: "/assets/img/BrandLogo6.png", alt: "StaticKit" },
      ],
    },

    achievements: {
      enabled: true,
      title: "Our achievements in numbers",
      description: "We take pride in our track record and the trust our community has placed in us.",
      items: [
        { label: "Years of experience", value: "20+" },
        { label: "Happy clients", value: "1,500+" },
        { label: "Cars repaired", value: "5,000+" },
        { label: "Certified technicians", value: "10+" },
      ],
    },
  },

  testimonials: {
    enabled: true,
    style: "cards", // could be "cards" | "highlight"
    highlight: {
      image: "/assets/img/TestimonialsImage.jpg",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet suscipit corporis.",
      name: "John Doe",
      role: "CEO, Company Name",
    },
    items: [
      {
        name: "Jean Dupont",
        role: "Customer",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        comment: "Excellent service, very professional!",
      },
      {
        name: "Marie Tremblay",
        role: "Customer",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        comment: "Quick and reliable. Highly recommend!",
      },
      {
        name: "Marc Lavoie",
        role: "Customer",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        comment: "Trustworthy and skilled team, highly satisfied!",
      },
    ],
    fallback: {
      enabled: true,
      title: "Why choose us",
      description: "We combine expertise, trust, and speed to give you the best service possible.",
      points: [
        {
          icon: Wrench,
          label: "Certified technicians",
          description: "Our team is made up of certified experts with years of hands-on experience."
        },
        {
          icon: ShieldCheck,
          label: "Transparent pricing",
          description: "No hidden fees, just clear and upfront pricing you can trust."
        },
        {
          icon: Clock,
          label: "Fast turnaround",
          description: "We get your car back on the road quickly without sacrificing quality."
        },
        {
          icon: ThumbsUp,
          label: "Guaranteed work",
          description: "Every service is backed by our satisfaction and quality guarantee."
        },
      ],
    },
  },

  cta: {
    variant: "mailto", // "mailto" | "contact"
    title: "Ready to book an appointment?",
    description:
      "Whether you have questions about our services, need a quote, or want to schedule an appointment, our team is here to help.",
    buttonPrimary: {
      text: "Contact Us",
    },
    buttonSecondary: {
      enabled: false,
      text: "Learn more",
      url: "/about",
    },
    image: {
      src: "/assets/img/CTAimage.jpg",
      alt: "Garage CTA image",
    },
    backgroundColor: "bg-blue-500",
  },


  gallery: {
    enabled: true,
    title: "Our Workshop in Action",
    subtitle: "A glimpse of our daily work and craftsmanship",
    images: [
      { src: "/assets/img/CardLong1.jpg", alt: "Mechanic working on an engine" },
      { src: "/assets/img/CardShort3.jpg", alt: "Car being lifted in the shop" },
      { src: "/assets/img/AboutImage1.jpg", alt: "Team repairing a vehicle" },
      { src: "/assets/img/TestimonialsImage.jpg", alt: "Oil change service" },
      { src: "/assets/img/hero-bg.png", alt: "Garage exterior" },
      { src: "/assets/img/AboutImage2.jpg", alt: "Wheel alignment in progress" },
      { src: "/assets/img/gallery1.jpg", alt: "Customer car ready for pickup" },
      { src: "/assets/img/CardShort2.jpg", alt: "Close-up of engine parts" },
    ],
  },

  footer: {
    logo: {
      url: "/",
      src: "/assets/img/repair-services.png",
      alt: "Garage Tremblay logo",
    },
    description:
      "Your trusted partner for all auto services. Expertise, transparency, and quality in every job we do.",
    map: {
      enabled: true,
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.685547607016!2d-73.56605968444334!3d45.501688279101906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5f6fd8b0cf%3A0x1a85c2cf7bbff4b!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1694473000000!5m2!1sen!2sca",
      height: 400, // you can adjust this (in px)
    },
    sections: [
      {
        title: "Links",
        links: [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ],
      },
    ],
    socialLinks: [
      { icon: "instagram", href: "#", label: "Instagram" },
      { icon: "facebook", href: "#", label: "Facebook" },
      { icon: "twitter", href: "#", label: "Twitter" },
      { icon: "linkedin", href: "#", label: "LinkedIn" },
    ],
    copyright: "© 2025 Garage Tremblay. All rights reserved.",
    legalLinks: [
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },

  aboutPage: {
    hero: {
      title: "About Garage Tremblay",
      subtitle:
        "Family-owned garage proudly serving Montréal drivers with honest, high-quality auto repairs for over 20 years.",
      background: "/assets/img/CTAimage.jpg",
      overlayOpacity: 0.25,
    },
    story: {
      enabled: true,
      title: "Our Story",
      text1:
        "What started as a small two-bay garage in 2008 has grown into one of Montréal’s most trusted auto repair shops.",
      text2:
        "Our mission is simple: treat every customer like family and every car like our own. Whether it’s an oil change or a major repair, we’re committed to transparency, reliability, and getting you back on the road safely.",
      image: "/assets/img/hero-bg.png",
    },
    values: {
      enabled: true,
      image: "/assets/img/AboutImage1.jpg",
      title: "Our Values",
      description:
        "Every repair, every handshake, every customer — our values drive everything we do.",
      list: [
        { title: "Honesty", text: "Fair quotes, no surprises, and full transparency.", icon: BadgeCheck },
        { title: "Quality", text: "Certified mechanics, top-grade parts, lasting repairs.", icon: Wrench },
        { title: "Community", text: "Proudly serving local Montréal drivers.", icon: Users },
        { title: "Trust", text: "Our reputation is built on word-of-mouth and reliability.", icon: ShieldCheck },
      ],
    },
    team: {
      enabled: true,
      title: "Meet the Team",
      description: "Our dedicated team of professionals is here to provide top-notch service and ensure your vehicle is in the best hands.",
      members: [
        { name: "Marc Dubois", role: "Lead Mechanic", image: "/assets/img/headshot1.jpg" },
        { name: "Sophie Tremblay", role: "Service Advisor", image: "/assets/img/headshot2.jpg" },
        { name: "Ali Rahman", role: "Technician", image: "/assets/img/headshot3.jpg" },
      ],
    },
  },


};
