import { SalesCardSkeleton } from '@/components/skeleton/sales-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export function RecentSalesSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <SalesCardSkeleton />
            <SalesCardSkeleton />
            <SalesCardSkeleton />
        </div>
    )
}
