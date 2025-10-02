// config/site.config.ts

import { MdCarRepair } from "react-icons/md";
import { FaOilCan } from "react-icons/fa6";
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

// config/types.ts
export type HeroVariant = "image" | "video";
export type ServicesVariant = "links" | "noLinks";


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
    title: "Garage",
    highlight: "Tremblay",
    subtitle: "Expertise, Transparence, Qualité",
    background: "/assets/img/hero-bg.jpg",
  },

  services: {
    variant: "noLinks" as ServicesVariant,
    links: {
      title: "Featured Services",
      description:
        "Explore our range of expert services designed to keep your vehicle in top condition. From routine maintenance to specialized repairs, we have you covered.",
      services: [
        { icon: MdCarRepair, title: "Car repair", image: "/assets/img/CardLong1.jpg", url: "/services/car-repair" },
        { icon: GiAutoRepair, title: "Auto Maintenance", image: "/assets/img/CardLong2.jpg", url: "/services/maintenance" },
        { icon: FaOilCan, title: "Oil Change", image: "/assets/img/CardShort1.jpg", url: "/services/oil-change" },
        { icon: PiTireFill, title: "Tire Services", image: "/assets/img/CardShort2.jpg", url: "/services/tires" },
        { icon: GiCarWheel, title: "Brake Repair", image: "/assets/img/CardShort3.jpg", url: "/services/brakes" },
      ],
    },
    noLinks: {
      title: "Deploy faster",
      subtitle: "A better workflow",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      image: "/assets/img/CardShort3.jpg",
      features: [
        { name: "Push to deploy.", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.", icon: CloudArrowUpIcon },
        { name: "SSL certificates.", description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.", icon: LockClosedIcon },
        { name: "Database backups.", description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.", icon: ServerIcon },
      ],
    },
  },

  about: {
    title: "About us",
    content: `We’ve been serving the community for over 20 years...`,
    image: "/assets/img/about.jpg",
  },

  testimonials: {
    enabled: true,
    items: [
      { name: "Jean Dupont", comment: "Excellent service, very professional!" },
      { name: "Marie Tremblay", comment: "Quick and reliable. Highly recommend!" },
    ],
  },

  cta: {
    title: "Ready to book an appointment?",
    buttonText: "Contact us today",
    buttonUrl: "/contact",
  },
};
