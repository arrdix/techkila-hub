import { SalesCard } from '@/pages/sales/components/sales-card.tsx'
import { RecentSalesSkeleton } from '@/components/skeleton/recent-sales-skeleton.tsx'
import { useGetAllInvoice } from '@/services/invoice/hooks/use-get-all-invoice.ts'

export function RecentSales(): JSX.Element {
    const { invoices, isFetching } = useGetAllInvoice()

    if (isFetching) {
        return <RecentSalesSkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">RECENT SALES</p>
            {invoices.map((invoice) => (
                <SalesCard key={invoice.id} invoice={invoice} />
            ))}
        </>
    )
}
