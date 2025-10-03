"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function AboutUs() {
  const about = siteConfig.about;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto">
        {/* Title + description */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{about.title}</h1>
          <p>{about.description}</p>
        </div>

        {/* Images + breakout */}
        <div className="grid gap-7 lg:grid-cols-3">
          <Image
            src={about.mainImage.src}
            alt={about.mainImage.alt}
            width={500}
            height={500}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />

          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {about.breakout?.enabled && (
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                <Image
                  src={about.breakout.src}
                  alt={about.breakout.alt}
                  width={180}
                  height={60}
                  className="mr-auto h-12"
                />
                <div>
                  <p className="mb-2 text-lg font-semibold">{about.breakout.title}</p>
                  <p className="text-muted-foreground">{about.breakout.description}</p>
                </div>
                {about.breakout.buttonText && about.breakout.buttonUrl && (
                  <Button variant="outline" className="mr-auto" asChild>
                    <a href={about.breakout.buttonUrl}>{about.breakout.buttonText}</a>
                  </Button>
                )}
              </div>
            )}

            {about.secondaryImage && (
              <Image
                src={about.secondaryImage.src}
                alt={about.secondaryImage.alt}
                width={500}
                height={500}
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            )}
          </div>
        </div>

        {/* Companies */}
        {about.companies?.enabled && (
          <div className="py-32">
            <p className="text-center">{about.companies.title}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {about.companies.items.map((company, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={100}
                    height={50}
                    className="h-8 w-auto md:h-18"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {about.achievements?.enabled && (
          <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16 mt-7">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-4xl font-semibold">{about.achievements.title}</h2>
              {about.achievements.description && (
                <p className="max-w-xl text-muted-foreground">{about.achievements.description}</p>
              )}
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
              {about.achievements.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <p>{item.label}</p>
                  <span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
