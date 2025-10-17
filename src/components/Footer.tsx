import Image from "next/image";
import { siteConfig } from "../../site.config";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { JSX } from "react";
import Link from "next/link";

const iconMap: Record<string, JSX.Element> = {
  facebook: <FaFacebook className="size-5" />,
  instagram: <FaInstagram className="size-5" />,
  twitter: <FaTwitter className="size-5" />,
  linkedin: <FaLinkedin className="size-5" />,
};

export function Footer7() {
  const { logo, description, sections, socialLinks, copyright, legalLinks, map } =
    siteConfig.footer;

  return (
    <section className="pt-0 bg-black">
      {/* --- Google Map Embed (Dynamic) --- */}
      {map?.enabled && (
        <div
          className="w-full overflow-hidden"
          style={{ height: `${map.height || 350}px` }}
        >
          <iframe
            src={map.src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}

      {/* --- Footer Content --- */}
      <div className="py-32 px-6">
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
                    height={80}
                    unoptimized
                  />
                </a>
              </div>

              <p className="text-muted-foreground max-w-[70%] text-sm">
                {description}
              </p>

              <ul className="text-muted-foreground flex items-center space-x-6">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="hover:text-blue-400 font-medium">
                    <a href={social.href} aria-label={social.label}>
                      {iconMap[social.icon]}
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

          {/* Bottom Bar */}
          <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{copyright}</p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
              {legalLinks.map((link, idx) => (
                <li key={idx} className="hover:text-blue-400">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
