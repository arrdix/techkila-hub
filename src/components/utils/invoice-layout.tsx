import { Separator } from '@/components/ui/separator'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { forwardRef } from 'react'

export const InvoiceLayout = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="flex flex-col gap-8 w-[1150px] h-[810px] p-8" ref={ref} {...props}>
            <div className="flex items-center gap-12">
                <img className="w-[250px] h-[75px]" src="/logo-typo.png" alt="" />
                <div className="flex flex-col">
                    <p className="text-xl font-extrabold mb-1">TEKNOLOGI KREATIF LINTAS APLIKASI</p>
                    <p className="text-base leading-3">
                        Jl. Babakan Jati No. 43 Batununggal, Bandung, Jawa Barat
                    </p>
                    <p className="text-base">
                        WhatsApp: 085959838128 Email: mail.techkilabandung@gmail.com
                    </p>
                </div>
            </div>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col w-full gap-6">
                    <p className="text-2xl font-bold">Tagihan Kepada</p>
                    <Separator className="bg-foreground" />
                    <div className="flex flex-col">
                        <p className="text-xl font-extrabold">Walter White</p>
                        <div className="flex flex-col">
                            <p className="leading-2">Jl. Pantai Kuta No. 666 Kuta</p>
                            <p className="leading-4">Kuta Sel, Kabupaten Badung</p>
                            <p className="leading-2">Bali 66666</p>
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
                            <p className="mb-1">TKLA-BDG-0124-0123</p>
                            <p>32 Oktober 2024</p>
                            <p className="leading-4">-</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Table className="border">
                    <TableHeader className="bg-foreground text-background border border-background">
                        <TableRow className="border border-background">
                            <TableHead className="text-background font-bold">Produk</TableHead>
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
                        <TableRow>
                            <TableCell className="font-medium">
                                Imou Cruiser Dual 8MP Outdoor
                            </TableCell>
                            <TableCell className="text-center">2</TableCell>
                            <TableCell className="text-right">1.233.000</TableCell>
                            <TableCell className="text-right">1.233.000</TableCell>
                            <TableCell className="text-right">1.233.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Fingerspot Revo A-232C</TableCell>
                            <TableCell className="text-center">2</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Fingerspot Revo A-232C</TableCell>
                            <TableCell className="text-center">2</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                            <TableCell className="text-right">981.000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p>Pembayaran dapat melalui transfer ke rekening</p>
                    <p className="font-extrabold">BCA 775 150 0266</p>
                    <p className="font-extrabold">Yudistira Whendra Ardi Nugraha Putra</p>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <p className="font-extrabold">Sub Total</p>
                        <p className="font-extrabold">Diskon Tambahan</p>
                        <p className="font-extrabold">Total</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-nowrap text-right font-extrabold">Rp. 131.123.142</p>
                        <p className="text-nowrap text-right font-extrabold">Rp. 0</p>
                        <p className="text-nowrap text-right font-extrabold">Rp. 131.123.142</p>
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
