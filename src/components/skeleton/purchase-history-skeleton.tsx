import { PurchaseCardSkeleton } from '@/components/skeleton/purchase-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export function PurchaseHistorySkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-8 mb-2" />
            <PurchaseCardSkeleton />
            <PurchaseCardSkeleton />
            <PurchaseCardSkeleton />
        </div>
    )
}
