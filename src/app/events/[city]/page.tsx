import EventsList from "@/components/EventsList"
import H1 from "@/components/H1"
import { Suspense } from "react"
import Loading from "./loading"
import { capitalize } from "@/lib/utils"
import { Metadata } from "next"

const mainStyles = {
    mobile: [
        "flex",
        "flex-col",
        "items-center",
        "py-24",
        "px-[20px]",
        "min-h-[110vh]",
    ],
}

type EventsPageProps = {
    params: {
        city: string
    }
}

export function generateMetadata({ params }: EventsPageProps): Metadata {
    const { city } = params

    const capitalizedCity = capitalize(city)

    return {
        title: city === "all" ? "All Events" : `Events in ${capitalizedCity}`,
    }
}

export default async function Events({ params }: EventsPageProps) {
    const city = params.city

    const capitalizedCity = capitalize(city)

    return (
        <main className={[...mainStyles.mobile].join(" ")}>
            <H1 className="pb-12">
                {capitalizedCity === "All" && "All Events"}
                {capitalizedCity !== "All" && `Events in ${capitalizedCity}`}
            </H1>
            <Suspense fallback={<Loading />}>
                <EventsList city={city} />
            </Suspense>
        </main>
    )
}
