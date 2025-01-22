import { SalesCard } from '@/pages/sales/components/sales-card.tsx'
import { SalesHistorySkeleton } from '@/components/skeleton/sales-history-skeleton.tsx'
import { Input } from '@/components/utils/input.tsx'
import { useEffect, useState } from 'react'

export function SalesHistory(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <SalesHistorySkeleton />
    }
    return (
        <>
            <p className="text-xs text-muted">SALES HISTORY</p>
            <Input
                name="search"
                placeholder="Search invoice..."
                type="text"
                className="mb-2"
            />
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
