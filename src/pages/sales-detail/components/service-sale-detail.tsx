import { IInvoice } from '@/types/invoice.ts'
import { IServiceSale } from '@/types/sale.ts'
import { formatDate } from '@/utils/format-time.ts'
import { Separator } from '@/components/ui/separator.tsx'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table.tsx'
import { formatCurrency } from '@/utils/format-number.ts'
import { useCallback } from 'react'
import { DEFAULT_SERVICE_QUANTITY } from '@/constants/constants.ts'

type Props = {
    invoice: IInvoice & { sale: IServiceSale }
}

export function ServiceSaleDetail({ invoice }: Props): JSX.Element {
    const calculateTotal = useCallback((price: number, quantity: number) => {
        const total = price * quantity
        return formatCurrency(total)
    }, [])

    return (
        <div className="flex flex-col gap-2 border p-4 rounded-lg">
            <div className="flex flex-col py-2">
                <p className="font-bold">{invoice.no}</p>
                <p className="text-xs text-muted">{formatDate(invoice.date)}</p>
            </div>
            <Separator />
            <div className="flex flex-col py-2">
                <p className="text-sm font-bold">{invoice.sale.companyName}</p>
                <p className="text-xs text-muted">{invoice.sale.address}</p>
                {/*<p className="text-xs text-muted">Kuta Sel, Kabupaten Badung</p>*/}
                {/*<p className="text-xs text-muted">Bali 66666</p>*/}
            </div>
            <Separator />
            <div className="flex flex-col gap-2 py-4">
                <Table>
                    <TableBody>
                        <TableRow className="border-b-0">
                            <TableCell className="text-sm align-top p-0">
                                {DEFAULT_SERVICE_QUANTITY}
                            </TableCell>
                            <TableCell className="text-sm p-0 px-4">
                                {invoice.sale.serviceName}
                            </TableCell>
                            <TableCell className="text-right font-bold align-top p-0">
                                {calculateTotal(
                                    invoice.sale.price,
                                    DEFAULT_SERVICE_QUANTITY
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <Separator />
            <div className="flex justify-between items-center gap-1 py-2">
                <p className="text-sm">Discount</p>
                <p className="font-bold w-max">
                    {formatCurrency(invoice.sale.discount)}
                </p>
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
