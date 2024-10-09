import { StockManagementSkeleton } from '@/components/skeleton/stock-management-skeleton'
import { StockCard } from '@/components/stock/stock-card'
import { Input } from '@/components/utils/input'
import { useEffect, useState } from 'react'

export function StockManagement(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <StockManagementSkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">STOCK MANAGEMENT</p>
            <Input name="search" placeholder="Search product..." type="text" className="mb-2" />
            <StockCard
                name="Fingerspot Revo A-232C"
                type="Access Control Device"
                price="1.300.000"
                qty={1}
            />
            <StockCard
                name="Imou Cruiser Dual (5MP+3MP) Outdoor"
                type="CCTV Camera"
                price="890.000"
                qty={1}
            />
            <StockCard name="Eppos EP-A5" type="Attendance Device" price="130.000" qty={1} />
        </>
    )
}
