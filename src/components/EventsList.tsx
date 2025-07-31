import { getEvents } from "@/lib/utils"
import EventCard from "./EventCard"
import { EventType } from "@/lib/types"

type EventListProps = {
    city: string
}

export default async function EventsList({ city }: EventListProps) {
    const events = await getEvents(city)

    if (!events) return <div>No events available</div>

    return (
        <section className="grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item) => (
                <EventCard key={item.id} event={item} />
            ))}
        </section>
    )
}
