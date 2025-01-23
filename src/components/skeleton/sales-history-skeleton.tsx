import { SalesCardSkeleton } from '@/components/skeleton/sales-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export function SalesHistorySkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-8 mb-2" />
            <SalesCardSkeleton />
            <SalesCardSkeleton />
            <SalesCardSkeleton />
        </div>
    )
}
