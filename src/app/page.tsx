import Image from 'next/image'
import Link from 'next/link'

const links = [
    { text: "Home", href: "/" },
    { text: "Events", href: "/events/all" },
]

export default function Home() {
    return (
        <main className="">
            <h1>Find events around you</h1>
            <p>Browse more than 10,000 events around you</p>

            <form action="">
                <input 
                    placeholder="Search events in any city..."
                    spellCheck={false}
                    type="text" 
                />
            </form>

            <section>
                <p>Popular</p>
                <div>
                    {links.map(link => (
                        <Link href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
