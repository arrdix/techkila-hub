import { PurchaseCardSkeleton } from '@/components/skeleton/purchase-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export function RecentPurchasesSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <PurchaseCardSkeleton />
            <PurchaseCardSkeleton />
            <PurchaseCardSkeleton />
        </div>
    )
}
