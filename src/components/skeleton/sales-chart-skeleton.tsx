import { Skeleton } from '@/components/ui/skeleton'

export function SalesChartSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-[310px]" />
        </div>
    )
}
