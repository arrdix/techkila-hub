import { IInvoice } from '@/types/invoice.ts'
import { IEcommerceSale } from '@/types/sale.ts'
import { formatDate } from '@/utils/format-time.ts'
import { Separator } from '@/components/ui/separator.tsx'
import { formatCurrency } from '@/utils/format-number.ts'
import { EcommerceBadge } from '@/components/ui/ecommerce-badge.tsx'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useCallback } from 'react'

type Props = {
    invoice: IInvoice & { sale: IEcommerceSale }
}

export function EcommerceSaleDetail({ invoice }: Props): JSX.Element {
    const handleCopy = useCallback(() => {
        console.log('COPY')
    }, [])

    return (
        <div className="flex flex-col gap-2 border p-4 rounded-lg">
            <div className="grid grid-cols-[1fr_auto] gap-1 py-2">
                <p className="font-bold">{invoice.no}</p>
                <div className="row-span-2">
                    <EcommerceBadge platform={invoice.sale.platform}>
                        {invoice.sale.platform}
                    </EcommerceBadge>
                </div>
                <p className="text-xs text-muted">{formatDate(invoice.date)}</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center py-4">
                <p className="text-sm font-bold">{invoice.sale.orderNo}</p>
                <Button
                    variant="ghost"
                    size="icon"
                    className="justify-end text-muted hover:bg-transparent hover:text-foreground"
                    onClick={handleCopy}
                >
                    <Copy size={20} className="text-muted" />
                </Button>
            </div>
            <Separator />
            <div className="flex justify-between items-center gap-1 py-2">
                <p className="font-bold">Grand Total</p>
                <div className="flex gap-1">
                    <p className="text-xxs font-bold">IDR</p>
                    <p className="text-lg font-bold w-max">
                        {formatCurrency(invoice.total)}
                    </p>
                </div>
            </div>
        </div>
    )
}
