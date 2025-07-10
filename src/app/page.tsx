import H1 from '@/components/H1'
import SearchMore from '@/components/SearchMore'
import Link from 'next/link'

const links = [
    { text: "Home", href: "/" },
    { text: "Events", href: "/events/all" },
]

export default function Home() {

    return (
        <main className="flex-1 flex flex-col items-center pt-36 px-3">
            <H1>Find events around you</H1>
            <p className="pb-12 pt-7 text-2xl lg:text-3xl opacity-75">
                Browse more than <span className="font-bold text-primary italic underline">10,000</span> events around you
            </p>

            <SearchMore />

            <section className="pt-4 flex gap-x-4 text-sm text-white/50">
                <p>Popular:</p>
                <div className="space-x-2 font-semibold">
                    {links.map(link => (
                        <Link href={link.href} key={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
