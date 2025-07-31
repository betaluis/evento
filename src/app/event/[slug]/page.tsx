import H1 from "@/components/H1"
import Image from "next/image"
import { Metadata } from "next"
import { getEvent } from "@/lib/utils"

type EventPageProps = {
    params: {
        slug: string
    }
}

type MetaDataProps = EventPageProps

type ContentSectionProps = {
    heading: string
    body: string
}

export async function generateMetadata({
    params,
}: MetaDataProps): Promise<Metadata> {
    const { slug } = params
    const { name } = await getEvent(slug)

    return {
        title: `Event: ${name}`,
    }
}

export default async function Event({ params }: EventPageProps) {
    const { slug } = params

    const event = await getEvent(slug)

    return (
        <main>
            <section className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
                <Image
                    alt="event background"
                    src={event.imageUrl}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    quality={50}
                    priority
                    className="z-0 object-cover blur-3xl"
                />
                <div
                    className={[
                        "flex flex-col gap-6",
                        "relative z-10",
                        "lg:flex-row lg:gap-16",
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
                            Organized by{" "}
                            <span className="italic">
                                {event.organizerName}
                            </span>
                        </p>
                        <button
                            className={[
                                "bg-blur w-[95vw] bg-white/20",
                                "mt-5 py-2",
                                "text-lg capitalize",
                                "rounded border-white/10",
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
            <div
                className={[
                    "flex flex-col items-center justify-center",
                    "py-14",
                    "text-center",
                ].join(" ")}
            >
                <ContentSection
                    heading={"About this event"}
                    body={event.description}
                />
                <ContentSection heading={"Location"} body={event.location} />
            </div>
        </main>
    )
}

const ContentSection = ({ heading, body }: ContentSectionProps) => {
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold text-white/95">{heading}</h2>
            <p
                className={[
                    "max-w-[40rem]",
                    "leading-8 text-white/75",
                    "px-8 pb-8 pt-4",
                ].join(" ")}
            >
                {body}
            </p>
        </section>
    )
}
