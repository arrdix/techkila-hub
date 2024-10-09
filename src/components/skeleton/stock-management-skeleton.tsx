import { ProductCardSkeleton } from '@/components/skeleton/product-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export function StockManagementSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-8 mb-2" />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
        </div>
    )
}
