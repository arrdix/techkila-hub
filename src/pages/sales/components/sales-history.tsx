import { SalesCard } from '@/pages/sales/components/sales-card.tsx'
import { SalesHistorySkeleton } from '@/components/skeleton/sales-history-skeleton.tsx'
import { Input } from '@/components/utils/input.tsx'
import { useEffect, useState } from 'react'
import { useGetAllInvoice } from '@/services/invoice/hooks/use-get-all-invoice.ts'

export function SalesHistory(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    const { invoices } = useGetAllInvoice()

    console.log(invoices)

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
            {invoices.map((invoice) => (
                <SalesCard invoice={invoice} />
            ))}
        </>
    )
}
