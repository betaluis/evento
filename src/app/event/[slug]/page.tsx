import H1 from "@/components/H1";
import Image from "next/image"

type EventPageProps = {
    params: {
        slug: string;
    }
}

export default async function Event({ params }: EventPageProps) {

    const slug = params.slug

    const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)

    const event = await response.json()

    return (
        <main>
            <section 
                className="
                    flex justify-center items-center relative overflow-hidden
                    py-14 md:py-20
                "
            >
                <Image
                    alt="event background"
                    src={event.imageUrl}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    quality={50}
                    priority
                    className="object-cover blur-3xl z-0"
                />
                <div
                    className={[
                        "flex flex-col gap-6",
                        "z-10 relative",
                        "lg:flex-row lg:gap-16"
                    ].join(" ")}
                >
                    <Image
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={200}
                        className="rounded-xl border-2 border-white/50"
                    />
                    <div className="flex flex-col">
                        <p className="text-white/75">
                            {new Date(event.date).toLocaleString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                            {event.name}
                        </H1>
                        <p className="whitespace-nowrap text-xl text-white/75">
                            Organized by <span className="italic">{event.organizerName}</span>
                        </p>
                        <button 
                            className={[
                                "bg-white/20 bg-blur w-[95vw]", 
                                "py-2 mt-5",
                                "text-lg capitalize",
                                "border-white/10 rounded",
                                "state-effects",
                                "sm:w-full",
                                "lg:mt-auto",
                            ].join(" ")}
                        >
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-center">
                    <h2 className="text-2xl">About this event</h2>
                    <p className="text-lg leading-8">{event.description}</p>
                </section>
                <section>
                    <h2>Location</h2>
                    <p>{event.location}</p>
                </section>
            </div>
        </main >
    )
}

