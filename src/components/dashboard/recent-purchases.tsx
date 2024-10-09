import { PurchaseCard } from '@/components/purchase/purchase-card'
import { RecentPurchasesSkeleton } from '@/components/skeleton/recent-purchases-skeleton'
import { useEffect, useState } from 'react'

export function RecentPurchases(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <RecentPurchasesSkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">RECENT PURCHASES</p>
            <PurchaseCard
                no="PO-TKLA-0124-0123"
                title="Pembelian Magnetic Lock & Bracker"
                category="Pembelian Barang"
                date="21 Oct 2024"
                value="1.123.421"
            />
            <PurchaseCard
                no="PO-TKLA-0124-0125"
                title="Ads Shopee Bandung"
                category="Biaya Iklan"
                date="21 Oct 2024"
                value="750.000"
            />
            <PurchaseCard
                no="PO-TKLA-0124-0124"
                title="Ongkir Barang"
                category="Biaya Ongkir"
                date="21 Oct 2024"
                value="39.000"
            />
        </>
    )
}
