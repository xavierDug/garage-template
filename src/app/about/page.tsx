import CTAcontact from "@/components/CTAcontact";
import Image from "next/image";
import { siteConfig } from "../../../site.config";

export default function About() {
    const { aboutPage } = siteConfig;
    const { hero, story, values, team } = aboutPage;

    return (
        <main className="bg-white text-gray-900">
            {/* HERO */}
            <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-60 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0" style={{ opacity: hero.overlayOpacity }}>
                    <Image src={hero.background} alt="About hero background" fill className="object-cover" />
                </div>

                <div className="relative container mx-auto px-6 text-center max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">{hero.title}</h1>
                    <p className="text-lg text-gray-200 leading-relaxed">{hero.subtitle}</p>
                </div>
            </section>

            {/* STORY */}
            {story.enabled && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">{story.title}</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">{story.text1}</p>
                            <p className="text-gray-600 leading-relaxed">{story.text2}</p>
                        </div>
                        <div>
                            <Image
                                src={story.image}
                                alt={story.title}
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* VALUES */}
            {values.enabled && (
                <section className="relative bg-black text-white py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-15 md:opacity-0">
                        <Image src={values.image} alt="Garage team at work" fill className="object-cover" />
                    </div>

                    <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch min-h-[700px]">
                        {/* Left: Full-height image */}
                        <div className="relative hidden lg:block h-full rounded-2xl overflow-hidden">
                            <Image
                                src={values.image}
                                alt="Mechanic working"
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Right: Text + Grid */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{values.title}</h2>
                            <p className="text-gray-300 mb-10 leading-relaxed">{values.description}</p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {values.list.map((value, i) => (
                                    <div
                                        key={i}
                                        className="p-6 bg-accent-foreground border-muted-foreground/20 rounded-xl border shadow-lg"
                                    >
                                        <div className="bg-blue-400/20 rounded-full p-4 mb-4 inline-block">
                                            <value.icon className="size-8 text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                                        <p className="text-gray-400 text-sm">{value.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {/* TEAM */}
            {team.enabled && (
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">{team.title}</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            {team.description}
                        </p>

                        {team.members?.length > 0 ? (
                            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                                {team.members.map((member, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                                        <div className="relative w-full h-80 mb-4">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top rounded-xl"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-gray-500">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Image
                                src={values.image}
                                alt="Our team"
                                width={1200}
                                height={600}
                                className="rounded-2xl object-cover shadow-xl mx-auto"
                            />
                        )}
                    </div>
                </section>
            )}

            {/* CTA */}
            <CTAcontact />
        </main>
    );
}
