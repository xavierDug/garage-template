"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Car repair",
    image: "/assets/img/CardLong1.jpg",
    url: "",
  },
  {
    title: "Auto Maintenance",
    image: "/assets/img/CardLong2.jpg",
    url: "",
  },
  {
    title: "Oil Change",
    image: "/assets/img/CardShort1.jpg",
    url: "",
  },
  {
    title: "Tire Services",
    image: "/assets/img/CardShort2.jpg",
    url: "",
  },
  {
    title: "Brake Repair",
    image: "/assets/img/CardShort3.jpg",
    url: "",
  },
];

const ServiceCardLinks = () => {
  return (
    <section className="py-32 p-6 bg-black">
      <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="mb-4 text-4xl font-medium md:text-6xl text-white">
              Featured Services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Explore our range of expert services designed to keep your vehicle in top condition. From routine maintenance to specialized repairs, we have you covered.
            </p>
            <Button variant="outline" size={"lg"} className="mt-8 w-fit">
              View all services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Featured Services - First 2 */}
          {services.slice(0, 2).map((service, idx) => (
            <div
              key={idx}
              className="group block overflow-hidden rounded-xl hover:opacity-[0.8] cursor-pointer transition-opacity duration-300"
            >
              <Card className="relative aspect-[3/4] overflow-hidden p-0 border-gray-900 bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </div>
          ))}

          {/* Secondary Services - Remaining 3 */}
          <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.slice(2).map((service, idx) => (
              <div
                key={idx + 2}
                className="group block overflow-hidden rounded-xl hover:opacity-[0.8] cursor-pointer transition-opacity duration-300"
              >
                <Card className="relative aspect-[4/3] overflow-hidden p-0 border-gray-900 bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
                  <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                    <div className="pr-4 text-sm font-semibold text-white">
                      {service.title}
                    </div>
                  </CardContent>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white transition-transform group-hover:scale-110" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceCardLinks };
