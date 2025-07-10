import { EventType } from "@/lib/types"
import EventCard from "./EventCard"

type EventsListProps = {
    events: EventType[]
}

export default function EventsList({ events }: EventsListProps) {
    return (
        <section 
            className={[
                "grid",
                "gap-10",
                "grid-cols-1",
                "max-w-5xl",
                "md:grid-cols-2",
                "lg:grid-cols-3",
            ].join(" ")}
        >
            {events.map(item => (
                <EventCard 
                    key={item.id}
                    event={item}
                />
            ))}
        </section>
    )
}

