import { Button } from '@/components/ui/button.tsx'
import { FlatCard } from '@/components/ui/flat-card.tsx'
import { Copy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { IInvoice } from '@/types/invoice.ts'
import { formatDate } from '@/utils/format-time.ts'
import { formatCurrency } from '@/utils/format-number.ts'
import { EcommerceBadge } from '@/components/ui/ecommerce-badge.tsx'
import { useCallback } from 'react'

interface SalesCardProps {
    invoice: IInvoice
}

export function SalesCard({ invoice }: SalesCardProps): JSX.Element {
    const navigate = useNavigate()

    const handleViewDetail = useCallback((): void => {
        navigate(`/sales/${invoice.id}`)
    }, [])

    const handleCopy = useCallback((): void => {
        console.log('COPY')
    }, [])

    const handleCopyEcommerceNo = useCallback((): void => {
        console.log('COPY ECOMMERCE NO')
    }, [])

    return (
        <FlatCard>
            <FlatCard.Header>
                <p className="text-base font-bold">{invoice.no}</p>
                <div className="flex ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="justify-end text-muted hover:bg-transparent hover:text-foreground"
                        onClick={handleCopy}
                    >
                        <Copy size={22} className="text-muted" />
                    </Button>
                </div>
            </FlatCard.Header>
            <FlatCard.Body className="flex-col">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">
                        {invoice.sale.saleType}
                    </p>
                    {invoice.sale.saleType === 'Ecommerce' && (
                        <EcommerceBadge
                            platform={invoice.sale.platform}
                            onClick={handleCopyEcommerceNo}
                        >
                            {invoice.sale.orderNo}
                        </EcommerceBadge>
                    )}
                </div>
            </FlatCard.Body>
            <FlatCard.Footer onClick={handleViewDetail}>
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">
                        {invoice.sale.branch}
                    </p>
                    <p className="text-sm text-muted font-semibold">
                        {formatDate(invoice.date)}
                    </p>
                </div>
                <div className="flex gap-1">
                    <p className="text-xs font-semibold">IDR</p>
                    <p className="text-2xl font-bold ">
                        {formatCurrency(invoice.total)}
                    </p>
                </div>
            </FlatCard.Footer>
        </FlatCard>
    )
}
