"use client"
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "All Events",
        path: "/events/all"
    }
]

export default function Header() {

    const activePathname = usePathname();

    return (
        <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9">
            <Logo />
            <nav className="h-full">
                <ul className="flex gap-x-6 text-sm h-full">
                    {links.map(link => (
                        <li 
                            key={link.path}
                            className={
                                clsx("flex items-center hover:text-white transition relative", {
                                "text-white": activePathname === link.path,
                                "text-white/50": activePathname !== link.path,
                            })}
                        >
                            <Link href={link.path}>{link.name}</Link>
                            {activePathname === link.path && (
                                <motion.div layoutId="header_active_link" className="bg-primary h-1 w-full absolute bottom-0"></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

