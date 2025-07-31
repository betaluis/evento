"use client"
import { EventType } from "@/lib/types"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

type EventCardProp = {
    event: EventType
}

// Colors
const text_light = "text-white/75"
const bg_color = "bg-white/[5%]"

const orginzerStyles = {
    mobile: [text_light, "text-italic"],
}

const eventHeadingStyles = {
    mobile: ["font-semibold", "text-2xl"],
}

const eventCardBodyStyles = {
    mobile: [
        "flex",
        "flex-col",
        "gap-2",
        "p-4",
        "items-center",
        "justify-center",
    ],
}

const eventButtonStyles = {
    mobile: [
        "bg-slate-800",
        "text-slate-200 text-sm",
        "text-center",
        "px-4 py-2",
        "mx-8",
        "rounded-full",
    ],
}

const eventLocationStyles = {
    mobile: ["text-white/50", "text-sm", "mt-4 pb-2"],
}

export default function EventCard({ event }: EventCardProp) {
    const randomNum = Math.floor(Math.random() * 50)

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            initial={{
                opacity: 0,
                scale: 0.8,
            }}
        >
            <div
                className={[
                    bg_color,
                    "relative",
                    "rounded-lg",
                    "overflow-hidden",
                ].join(" ")}
            >
                <section
                    className={[
                        "flex flex-col items-center justify-center",
                        "absolute left-2 top-2",
                        "p-2",
                        "rounded",
                        "bg-black/50",
                    ].join(" ")}
                >
                    <p className="-mb-1 text-2xl font-bold tracking-wider">
                        {new Date(event.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                        })}
                    </p>
                    <p className="text-sm uppercase text-primary">
                        {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                        })}
                    </p>
                </section>
                <Image
                    src={`https://picsum.photos/id/${randomNum}/500/250`}
                    alt="Event"
                    width={500}
                    height={250}
                    className="w-full object-cover"
                />
                <div className={eventCardBodyStyles.mobile.join(" ")}>
                    <h2 className={eventHeadingStyles.mobile.join(" ")}>
                        {event.name}
                    </h2>
                    <p className={orginzerStyles.mobile.join(" ")}>
                        By {event.organizerName}
                    </p>
                    <p className={eventLocationStyles.mobile.join(" ")}>
                        {event.location}
                    </p>
                    <Link
                        href={`/event/${event.slug}`}
                        className={eventButtonStyles.mobile.join(" ")}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
