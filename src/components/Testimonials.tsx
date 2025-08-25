import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="py-32 bg-black px-6">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
                        <Image
                            src="/assets/img/TestimonialsImage.jpg"
                            alt="placeholder"
                            width={500}
                            height={500}
                            className="h-72 w-full rounded-md object-cover lg:h-auto"
                        />
                        <Card className="col-span-2 flex items-center justify-center p-6 bg-accent-foreground border-muted-foreground/20">
                            <div className="flex flex-col gap-4">
                                <q className="text-xl font-medium lg:text-3xl text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                                    eveniet suscipit corporis sequi usdam alias fugiat iusto
                                    perspiciatis.
                                </q>
                                <div className="flex flex-col items-start">
                                    <p className="text-white">John Doe</p>
                                    <p className="text-muted/80">CEO, Company Name</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <Card className="bg-accent-foreground border-muted-foreground/20">
                            <CardContent className="px-6 pt-6 leading-7 text-white">
                                <q>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Ipsa, eveniet inventore! Omnis incidunt vel iste.
                                </q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium text-white">John Doe</p>
                                        <p className="text-muted/80">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="bg-accent-foreground border-muted-foreground/20">
                            <CardContent className="px-6 pt-6 leading-7 text-white">
                                <q>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Ipsa, eveniet inventore! Omnis incidunt vel iste.
                                </q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium text-white">John Doe</p>
                                        <p className="text-muted/80">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="bg-accent-foreground border-muted-foreground/20">
                            <CardContent className="px-6 pt-6 leading-7 text-white">
                                <q>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Ipsa, eveniet inventore! Omnis incidunt vel iste.
                                </q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium text-white">John Doe</p>
                                        <p className="text-muted/80">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
