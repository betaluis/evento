import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-8">
            <Logo />
            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/events/all">All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

