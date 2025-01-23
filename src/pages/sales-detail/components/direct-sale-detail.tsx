import { formatDate } from '@/utils/format-time.ts'
import { Separator } from '@/components/ui/separator.tsx'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table.tsx'
import { IDirectSale } from '@/types/sale.ts'
import { IInvoice } from '@/types/invoice.ts'
import { formatCurrency } from '@/utils/format-number.ts'

type Props = {
    invoice: IInvoice & { sale: IDirectSale }
}

export function DirectSaleDetail({ invoice }: Props): JSX.Element {
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
                        {invoice.sale.products.map((product) => (
                            <TableRow className="border-b-0">
                                <TableCell className="text-sm align-top p-0">
                                    {product.quantity}
                                </TableCell>
                                <TableCell className="text-sm p-0 px-4">
                                    {product.name}
                                </TableCell>
                                <TableCell className="text-right font-bold align-top p-0">
                                    {formatCurrency(product.price)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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
