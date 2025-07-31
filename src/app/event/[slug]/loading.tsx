import Skeleton from "@/components/Skeleton"
import { sleeper } from "@/lib/utils"

export default function loading() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-4 pt-28">
            <Skeleton className="w-96" />
            <Skeleton className="w-[480px]" />
            <Skeleton className="w-[480px]" />
            <Skeleton className="w-[480px]" />
            <Skeleton className="w-[480px]" />
        </div>
    )
}
