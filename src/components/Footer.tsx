import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "Links",
        links: [
            { name: "Home", href: "#" },
            { name: "About", href: "#" },
            { name: "Services", href: "#" },
            { name: "Contact us", href: "#" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

const Footer7 = ({
    logo = {
        url: "https://www.shadcnblocks.com",
        src: "/assets/img/Repair-services.png",
        alt: "logo",
        title: "",
    },
    sections = defaultSections,
    description = "Your trusted partner for all repair services. We provide expertise, transparency, and quality in every job we do.",
    socialLinks = defaultSocialLinks,
    copyright = "© 2025 Your Company. All rights reserved.",
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <section className="py-32 px-6 bg-black">
            <div className="container mx-auto">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={200}
                                    height={500}
                                />
                            </a>
                            <h2 className="text-xl font-semibold text-white">{logo.title}</h2>
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">
                            {description}
                        </p>
                        <ul className="text-muted-foreground flex items-center space-x-6">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-blue-400 font-medium">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 lg:gap-20 text-start sm:text-right">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                                <ul className="text-muted-foreground space-y-3 text-sm">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-blue-400 font-medium"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-blue-400">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer7 };
