import { Separator } from '@/components/ui/separator.tsx'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table.tsx'
import { forwardRef, HTMLAttributes, useCallback } from 'react'
import { IInvoice } from '@/types/invoice.ts'
import { IDirectSale, IServiceSale } from '@/types/sale.ts'
import { formatFullDate } from '@/utils/format-time.ts'
import { formatCurrency } from '@/utils/format-number.ts'

interface Props extends HTMLAttributes<HTMLDivElement> {
    invoice: IInvoice & { sale: IDirectSale | IServiceSale }
}

const defaultServiceQuantity = 1

export const InvoiceLayout = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { invoice } = props

    const calculateTotal = useCallback(
        (price: number, quantity: number, discount: number) => {
            const total = price * quantity - discount
            return formatCurrency(total)
        },
        []
    )

    return (
        <div
            className="flex flex-col gap-8 w-[1150px] h-[810px] p-8"
            ref={ref}
            {...props}
        >
            <div className="flex items-center gap-12">
                <img
                    className="w-[250px] h-[75px]"
                    src="/logo-typo.png"
                    alt=""
                />
                <div className="flex flex-col">
                    <p className="text-xl font-extrabold mb-1">
                        TEKNOLOGI KREATIF LINTAS APLIKASI
                    </p>
                    <p className="text-base leading-3">
                        Jl. Babakan Jati No. 43 Batununggal, Bandung, Jawa Barat
                    </p>
                    <p className="text-base">
                        WhatsApp: 085959838128 Email:
                        mail.techkilabandung@gmail.com
                    </p>
                </div>
            </div>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col w-full gap-6">
                    <p className="text-2xl font-bold">Tagihan Kepada</p>
                    <Separator className="bg-foreground" />
                    <div className="flex flex-col">
                        <p className="text-xl font-extrabold">
                            {invoice.sale.companyName}
                        </p>
                        <div className="flex flex-col">
                            <p className="leading-2">{invoice.sale.address}</p>
                            {/*<p className="leading-4">*/}
                            {/*    Kuta Sel, Kabupaten Badung*/}
                            {/*</p>*/}
                            {/*<p className="leading-2">Bali 66666</p>*/}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-6">
                    <p className="text-2xl font-bold text-right">INVOICE</p>
                    <Separator className="bg-foreground" />
                    <div className="flex justify-end gap-8">
                        <div className="flex flex-col">
                            <p className="mb-1">Nomor Nota</p>
                            <p>Tanggal Nota</p>
                            <p className="leading-4">Tanggal Jatuh Tempo</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-1">{invoice.no}</p>
                            <p>{formatFullDate(invoice.date)}</p>
                            <p className="leading-4">-</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Table className="border">
                    <TableHeader className="bg-foreground text-background border border-background">
                        <TableRow className="border border-background">
                            <TableHead className="text-background font-bold">
                                Produk
                            </TableHead>
                            <TableHead className="text-background text-center font-bold">
                                Qty
                            </TableHead>
                            <TableHead className="text-background font-bold text-right">
                                Harga
                            </TableHead>
                            <TableHead className="text-background font-bold text-right">
                                Diskon
                            </TableHead>
                            <TableHead className="text-background font-bold text-right">
                                Jumlah
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoice.sale.saleType === 'Direct' &&
                            invoice.sale.products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {product.quantity}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(product.price)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(invoice.sale.discount)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {calculateTotal(
                                            product.price,
                                            product.quantity,
                                            invoice.sale.discount
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        {invoice.sale.saleType === 'Service' && (
                            <TableRow>
                                <TableCell className="font-medium">
                                    {invoice.sale.serviceName}
                                </TableCell>
                                <TableCell className="text-center">2</TableCell>
                                <TableCell className="text-right">
                                    {formatCurrency(invoice.sale.price)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {formatCurrency(invoice.sale.discount)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {calculateTotal(
                                        invoice.sale.price,
                                        defaultServiceQuantity,
                                        invoice.sale.discount
                                    )}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p>Pembayaran dapat melalui transfer ke rekening</p>
                    <p className="font-extrabold">BCA 775 150 0266</p>
                    <p className="font-extrabold">
                        Yudistira Whendra Ardi Nugraha Putra
                    </p>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <p className="font-extrabold">Sub Total</p>
                        <p className="font-extrabold">Diskon Tambahan</p>
                        <p className="font-extrabold">Total</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-nowrap text-right font-extrabold">
                            {formatCurrency(invoice.total)}
                        </p>
                        <p className="text-nowrap text-right font-extrabold">
                            Rp. 0 (DUMMY)
                        </p>
                        <p className="text-nowrap text-right font-extrabold">
                            {formatCurrency(invoice.total)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-around mt-8">
                <div className="flex flex-col gap-16 w-[200px]">
                    <p className="text-center">Hormat Kami</p>
                    <p className="text-center">Finance Dept</p>
                </div>
                <div className="flex flex-col gap-20 w-[200px]">
                    <p className="text-center">Pelanggan</p>
                    <Separator className="bg-foreground" />
                </div>
            </div>
        </div>
    )
})
