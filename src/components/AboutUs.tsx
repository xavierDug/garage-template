import { Button } from "@/components/ui/button";
import Image from "next/image";

interface About3Props {
    title?: string;
    description?: string;
    mainImage?: {
        src: string;
        alt: string;
    };
    secondaryImage?: {
        src: string;
        alt: string;
    };
    breakout?: {
        src: string;
        alt: string;
        title?: string;
        description?: string;
        buttonText?: string;
        buttonUrl?: string;
    };
    companiesTitle?: string;
    companies?: Array<{
        src: string;
        alt: string;
    }>;
    achievementsTitle?: string;
    achievementsDescription?: string;
    achievements?: Array<{
        label: string;
        value: string;
    }>;
}

const defaultCompanies = [
    {
        src: "/assets/img/BrandLogo1.png", // Placeholder image URL
        alt: "Arc",
    },
    {
        src: "/assets/img/BrandLogo2.png", // Placeholder image URL
        alt: "Descript",
    },
    {
        src: "/assets/img/BrandLogo3.png", // Placeholder image URL
        alt: "Mercury",
    },
    {
        src: "/assets/img/BrandLogo4.png", // Placeholder image URL
        alt: "Ramp",
    },
    {
        src: "/assets/img/BrandLogo5.png", // Placeholder image URL
        alt: "Retool",
    },
    {
        src: "/assets/img/BrandLogo6.png", // Placeholder image URL
        alt: "Watershed",
    },
];

const defaultAchievements = [
    { label: "Années d’expérience", value: "20+" },
    { label: "Clients satisfaits", value: "1,500+" },
    { label: "Véhicules réparés", value: "5000+" },
    { label: "Techniciens certifiés", value: "10+" },
];

const AboutUs = ({
    title = "À propos de notre garage",
    description = "Depuis plus de 20 ans, nous aidons les conducteurs à garder leur véhicule sécuritaire, performant et fiable. Notre équipe certifiée vous accompagne avec transparence et professionnalisme.",
    mainImage = {
        src: "/assets/img/AboutImage1.jpg", // Placeholder image URL
        alt: "placeholder",
    },
    secondaryImage = {
        src: "/assets/img/AboutImage2.jpg", // Placeholder image URL
        alt: "placeholder",
    },
    breakout = {
        src: "/assets/img/repair-services-black.png", // Placeholder image URL
        alt: "logo",
        title: "Votre garage, votre image en ligne",
        description:
            "Nous créons un site moderne qui inspire confiance et attire de nouveaux clients.",
        buttonText: "Demander un devis",
        buttonUrl: "https://shadcnblocks.com",
    },
    companiesTitle = "Auto brands serviced",
    companies = defaultCompanies,
    achievementsTitle = "Our Achievements in Numbers",
    achievementsDescription = "We take pride in our accomplishments and the impact we've made in the industry. Here are some key metrics that highlight our success and dedication to excellence.",
    achievements = defaultAchievements,
}: About3Props = {}) => {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="container mx-auto">
                <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
                    <h1 className="text-5xl font-semibold">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="grid gap-7 lg:grid-cols-3">
                    <Image
                        src={mainImage.src}
                        alt={mainImage.alt}
                        width={500}
                        height={500}
                        className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
                    />
                    <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                        <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                            <Image
                                src={breakout.src}
                                alt={breakout.alt}
                                width={180}
                                height={500}
                                className="mr-auto h-12"
                            />
                            <div>
                                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                                <p className="text-muted-foreground">{breakout.description}</p>
                            </div>
                            <Button variant="outline" className="mr-auto" asChild>
                                <a href={breakout.buttonUrl} target="_blank">
                                    {breakout.buttonText}
                                </a>
                            </Button>
                            {/* <Button variant="outline" className="mr-auto" asChild>
                                <a href={breakout.buttonUrl} target="_blank">
                                    En savoir plus
                                </a>
                            </Button> */}
                        </div>
                        <Image
                            src={secondaryImage.src}
                            alt={secondaryImage.alt}
                            width={500}
                            height={500}
                            className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                        />
                    </div>
                </div>
                <div className="py-32">
                    <p className="text-center">{companiesTitle} </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        {companies.map((company, idx) => (
                            <div className="flex items-center gap-3" key={company.src + idx}>
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
                <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
                        <p className="max-w-xl text-muted-foreground">
                            {achievementsDescription}
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
                        {achievements.map((item, idx) => (
                            <div className="flex flex-col gap-4" key={item.label + idx}>
                                <p>{item.label}</p>
                                <span className="text-4xl font-semibold md:text-5xl">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
                </div>
            </div>
        </section>
    );
};

export { AboutUs };
