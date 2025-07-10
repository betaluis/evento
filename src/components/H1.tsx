import React from "react"
import { twMerge } from "tailwind-merge"

type MainHeaderProps = {
    children: React.ReactNode,
    className?: string
}
export default function MainHeader({ 
    children, 
    className 
}: MainHeaderProps) {

    const textStyles = {
        mobile: "text-3xl font-bold tracking-tight",
        desktop: "lg:text-6xl"
    }

    return (
        <h1
            className={
                twMerge(
                    textStyles.mobile, 
                    textStyles.desktop, 
                    className
                )
            }
        >
            {children}
        </h1>
    )
}

