"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchMore() {

    const [searchText, setSearchText] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!searchText) return

        router.push(`/events/${searchText}`)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-full sm:w-[580px]">
            <input
                placeholder="Search events in any city..."
                spellCheck={false}
                type="text"
                className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-primary/50 transintion focus:ring-2 focus:bg-white/10"
                onChange={(e)=> setSearchText(e.target.value)}
                value={searchText}
            />
        </form>
    )
}

