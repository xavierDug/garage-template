import { siteConfig } from "../../site.config";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type Testimonial = {
    name: string;
    role: string;
    comment: string;
    avatar: string;
};

type Highlight = {
    name: string;
    role: string;
    comment: string;
    image?: string;
};

type FallbackPoint = {
    label: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Fallback = {
    enabled: boolean;
    title: string;
    description?: string;
    points: FallbackPoint[];
};

const Testimonials = () => {
    const { enabled, highlight, items, fallback } = siteConfig.testimonials as {
        enabled: boolean;
        highlight?: Highlight;
        items: Testimonial[];
        fallback?: Fallback;
    };

    if (!enabled) return null;

    // ✅ Case 1: If there are testimonials, show them
    if (items && items.length > 0) {
        return (
            <section className="py-32 bg-black px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-6">
                        {/* Highlight testimonial */}
                        <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
                            {highlight?.image && (
                                <Image
                                    src={highlight.image}
                                    alt="testimonial highlight"
                                    width={500}
                                    height={500}
                                    className="h-72 w-full rounded-md object-cover lg:h-auto"
                                />
                            )}
                            <Card className={`col-span-2 flex items-center justify-center p-6 bg-${siteConfig.general.primaryColor} border-muted-foreground/20`}>
                                <div className="flex flex-col gap-4">
                                    <q className="text-xl font-medium lg:text-3xl text-white">
                                        {highlight?.comment}
                                    </q>
                                    <div className="flex flex-col items-start">
                                        <p className="text-white">{highlight?.name}</p>
                                        <p className="text-muted/80">{highlight?.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Other testimonials */}
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            {items.map((t, idx) => (
                                <Card
                                    key={idx}
                                    className="bg-accent-foreground border-muted-foreground/20"
                                >
                                    <CardContent className="px-6 pt-6 leading-7 text-white">
                                        <q>{t.comment}</q>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4 leading-5">
                                            <Avatar className="size-9 rounded-full ring-1 ring-input">
                                                <AvatarImage src={t.avatar} alt={t.name} />
                                            </Avatar>
                                            <div className="text-sm">
                                                <p className="font-medium text-white">{t.name}</p>
                                                <p className="text-muted/80">{t.role}</p>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // ✅ Case 2: Fallback if no testimonials
    if (fallback?.enabled) {
        return (
            <section className="py-32 bg-black px-6">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-5xl font-semibold mb-4">{fallback.title}</h2>
                    {fallback.description && (
                        <p className="max-w-2xl mx-auto text-muted/80 mb-12">
                            {fallback.description}
                        </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {fallback.points.map((p, idx) => (
                            <Card
                                key={idx}
                                className="flex flex-col gap-4 bg-accent-foreground p-6 border-muted-foreground/20"
                            >
                                <p.icon className="w-10 h-10 text-blue-400" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {p.label}
                                    </h3>
                                    <p className="text-muted/80">{p.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return null;
};

export { Testimonials };
