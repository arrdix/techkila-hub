import { SalesCard } from '@/pages/sales/components/sales-card.tsx'
import { RecentSalesSkeleton } from '@/components/skeleton/recent-sales-skeleton.tsx'
import { useEffect, useState } from 'react'

export function RecentSales(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <RecentSalesSkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">RECENT SALES</p>
            <SalesCard
                no="TKLA-BDG-0124-0123"
                date="12 Oct 2024"
                value="239.000"
            />
            <SalesCard
                no="TKLA-BDG-0124-0124"
                date="12 Oct 2024"
                value="13.239.000"
            />
            <SalesCard
                no="TKLA-BDG-0124-0125"
                date="12 Oct 2024"
                value="2.239.000"
            />
            <SalesCard
                no="TKLA-BDG-0124-0126"
                date="12 Oct 2024"
                value="13.500"
            />
        </>
    )
}
