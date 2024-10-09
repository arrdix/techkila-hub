import { Skeleton } from '@/components/ui/skeleton'

export function RecapSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-14" />
            <div className="flex justify-between gap-4 mt-2">
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
            </div>
        </div>
    )
}
