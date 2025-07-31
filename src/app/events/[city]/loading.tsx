import SkeletonCard from "@/components/SkeletonCard"

export default function Loading() {
    return (
        <div className="m-auto flex max-w-3xl flex-wrap items-center justify-center gap-20">
            {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    )
}
