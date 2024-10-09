import { PurchaseCard } from '@/components/purchase/purchase-card'
import { PurchaseHistorySkeleton } from '@/components/skeleton/purchase-history-skeleton'
import { Input } from '@/components/utils/input'
import { useEffect, useState } from 'react'

export function PurchaseHistory(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <PurchaseHistorySkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">PURCHASES HISTORY</p>
            <Input name="search" placeholder="Search receipt..." type="text" className="mb-2" />
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
