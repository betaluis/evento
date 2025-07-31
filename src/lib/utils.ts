import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventType } from "./types"

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes))
}

export function sleeper(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function capitalize(string: string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
}

export async function getEvents(city: string) {
    const url = `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`

    const res = await fetch(url, {
        next: {
            revalidate: 300,
        },
    })

    if (!res.ok) throw new Error("Error fetching events data")

    const events: EventType[] = await res.json()
    return events
}

export async function getEvent(slug: string): Promise<EventType> {
    const url = `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`

    const response = await fetch(url, {
        next: {
            revalidate: 300,
        },
    })

    if (!response.ok) throw new Error("Error fetching event data")

    const event: EventType = await response.json()
    return event
}
