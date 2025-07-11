import { EventType } from "@/lib/types"
import Image from "next/image";
import Link from "next/link";

type EventCardProp = {
    event: EventType;
}

// Colors
const text_light = "text-white/75"
const bg_color = "bg-white/[5%]"

const orginzerStyles = {
    mobile: [
        text_light,
        "text-italic"
    ]
}

const eventHeadingStyles = {
    mobile: [
        "font-semibold",
        "text-2xl"
    ]
}

const eventCardBodyStyles = {
    mobile: [
        "flex", "flex-col", "gap-2", "p-4",
        "items-center", "justify-center"
    ],
}

const eventButtonStyles = {
    mobile: [
        "bg-slate-800",
        "text-slate-200",
        "text-center",
        "p-2",
        "mx-8",
        "rounded-full",
    ]
}

const eventLocationStyles = {
    mobile: [
        "text-white/50",
        "text-sm",
        "mt-4"
    ]
}

export default function EventCard({ event }: EventCardProp) {

    const randomNum = Math.floor(Math.random() * 50)

    return (
        <Link href={`/event/${event.slug}`}>
            <div
                className={[
                    bg_color,
                    "relative",
                    "rounded-lg",
                    "overflow-hidden",
                    "state-effects"
                ].join(" ")}
            >
                <section
                    className={[
                        "flex justify-center items-center flex-col",
                        "absolute top-2 left-2",
                        "p-2",
                        "rounded",
                        "bg-black/50",
                    ].join(" ")}
                >
                    <p
                        className={[
                            "text-2xl",
                            "font-bold",
                            "tracking-wider",
                            "-mb-1"
                        ].join(" ")}
                    >
                        {
                            new Date(event.date)
                                .toLocaleDateString("en-US", {
                                    day: "2-digit",
                                })
                        }
                    </p>
                    <p
                        className={[
                            "text-sm",
                            "uppercase",
                            "text-primary"
                        ].join(" ")}
                    >
                        {
                            new Date(event.date)
                                .toLocaleDateString("en-US", {
                                    month: "short"
                                })
                        }
                    </p>
                </section>
                <Image
                    src={`https://picsum.photos/id/${randomNum}/500/250`}
                    alt="Event"
                    width={500}
                    height={250}
                    className="object-fit w-full"
                />
                <div className={eventCardBodyStyles.mobile.join(" ")}>
                    <h2 className={eventHeadingStyles.mobile.join(" ")}>
                        {event.name}
                    </h2>
                    <p className={orginzerStyles.mobile.join(" ")} >
                        By {event.organizerName}
                    </p>
                    <p className={eventLocationStyles.mobile.join(" ")}>
                        {event.location}
                    </p>
                    <Link
                        href=""
                        className={eventButtonStyles.mobile.join(" ")}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </Link>
    )
}

