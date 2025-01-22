import { Separator } from '@/components/ui/separator.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { InvoiceLayout } from '@/pages/sales-detail/components/invoice-layout.tsx'
import { SalesDetailSkeleton } from '@/components/skeleton/sales-detail-skeleton.tsx'

export function SalesDetail(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    const { id } = useParams()
    const navigate = useNavigate()

    const contentRef = useRef<HTMLDivElement>(null)
    const onPrint = useReactToPrint({
        contentRef,
        onBeforePrint: async () => {
            document.title = window.parent.document.title =
                id ?? 'it should be the invoice number'
        },
        onAfterPrint: () =>
            (document.title = window.parent.document.title = 'TechkilaHub'),
    })

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <SalesDetailSkeleton />
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">INVOICE</p>
            <div className="flex flex-col gap-2 border p-4 rounded-lg">
                <div className="flex flex-col py-2">
                    <p className="font-bold">{id}</p>
                    <p className="text-xs text-muted">16 Oct 2024</p>
                </div>
                <Separator />
                <div className="flex flex-col py-2">
                    <p className="font-bold">Walter White</p>
                    <p className="text-xs text-muted">
                        Jl. Pantai Kuta No. 666 Kuta
                    </p>
                    <p className="text-xs text-muted">
                        Kuta Sel, Kabupaten Badung
                    </p>
                    <p className="text-xs text-muted">Bali 66666</p>
                </div>
                <Separator />
                <div className="flex flex-col gap-2 py-4">
                    <Table>
                        <TableBody>
                            <TableRow className="border-b-0">
                                <TableCell className="text-sm align-top p-0">
                                    2
                                </TableCell>
                                <TableCell className="text-sm p-0 px-4">
                                    Fingerspot Revo A-232C
                                </TableCell>
                                <TableCell className="text-right font-bold align-top p-0">
                                    2.890.000
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b-0">
                                <TableCell className="text-sm align-top p-0">
                                    2
                                </TableCell>
                                <TableCell className="text-sm p-0 px-4">
                                    Imou Cruiser Dual 8MP Outdoor
                                </TableCell>
                                <TableCell className="text-right font-bold align-top p-0">
                                    890.000
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <Separator />
                <div className="flex justify-between items-center gap-1 py-2">
                    <p className="font-bold">Grand Total</p>
                    <div className="flex gap-1">
                        <p className="text-xxs font-bold">IDR</p>
                        <p className="text-lg font-bold w-max">2.130.000</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button
                    variant="ghost"
                    size="lg"
                    className="w-1/2 mt-2"
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                <Button
                    size="lg"
                    className="w-1/2 mt-2"
                    onClick={() => onPrint()}
                >
                    Print
                </Button>
            </div>
            <div style={{ display: 'none' }}>
                <InvoiceLayout ref={contentRef} />
            </div>
        </div>
    )
}
