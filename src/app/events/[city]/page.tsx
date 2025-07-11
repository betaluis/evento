import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventType } from "@/lib/types";

const mainStyles = {
    mobile: [
        "flex",
        "flex-col",
        "items-center",
        "py-24",
        "px-[20px]",
        "min-h-[110vh]",
    ]
}

type EventsPageProps = {
    params: {
        city: string
    }
}

export default async function Events({ params }: EventsPageProps) {

    const city = params.city

    const formattedCity =
        params.city.slice(0, 1).toUpperCase()
        + params.city.slice(1)

    const url = `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    console.log(url)

    const res = await fetch(url);

    if (!res.ok) throw new Error("Error fetching data")
    
    const events: EventType[] = await res.json()

    return (
        <main
            className={
                [...mainStyles.mobile].join(" ")
            }
        >
            <H1 className="pb-12">
                {city === "All" && "All Events"}
                {city !== "All" && `Events in ${formattedCity}`}
            </H1>
            <EventsList events={events} />
        </main>
    )
}

