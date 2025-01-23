import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { useCallback, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { InvoiceLayout } from '@/pages/sales-detail/components/invoice-layout.tsx'
import { SalesDetailSkeleton } from '@/components/skeleton/sales-detail-skeleton.tsx'
import { useGetInvoice } from '@/services/invoice/hooks/use-get-invoice.ts'
import { Empty } from '@/components/error/empty.tsx'
import { DirectSaleDetail } from '@/pages/sales-detail/components/direct-sale-detail.tsx'
import { IInvoice } from '@/types/invoice.ts'
import { IDirectSale, IEcommerceSale, IServiceSale } from '@/types/sale.ts'
import { ServiceSaleDetail } from '@/pages/sales-detail/components/service-sale-detail.tsx'
import { EcommerceSaleDetail } from '@/pages/sales-detail/components/ecommerce-sale-detail.tsx'
import { cn } from '@/libs/utils.ts'

export function SalesDetail(): JSX.Element {
    const { id } = useParams()

    const { invoice, isFetching } = useGetInvoice(`${id}`)

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

    const handleBack = useCallback(() => {
        navigate(-1)
    }, [])

    if (isFetching) {
        return <SalesDetailSkeleton />
    }

    if (!id || !invoice) {
        return <Empty message="No invoice found." onBack={handleBack} />
    }

    const renderEcommerceSaleDetail = invoice.sale.saleType === 'Ecommerce' && (
        <EcommerceSaleDetail
            invoice={invoice as IInvoice & { sale: IEcommerceSale }}
        />
    )

    const renderDirectSaleDetail = invoice.sale.saleType === 'Direct' && (
        <DirectSaleDetail
            invoice={invoice as IInvoice & { sale: IDirectSale }}
        />
    )

    const renderServiceSaleDetail = invoice.sale.saleType === 'Service' && (
        <ServiceSaleDetail
            invoice={invoice as IInvoice & { sale: IServiceSale }}
        />
    )

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">INVOICE</p>

            {renderEcommerceSaleDetail}
            {renderDirectSaleDetail}
            {renderServiceSaleDetail}

            <div className="flex justify-end gap-2">
                <Button
                    variant={
                        invoice.sale.saleType === 'Ecommerce'
                            ? 'default'
                            : 'ghost'
                    }
                    size="lg"
                    className={cn('w-1/2 mt-2', {
                        'w-full': invoice.sale.saleType === 'Ecommerce',
                    })}
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                {invoice.sale.saleType !== 'Ecommerce' && (
                    <Button
                        size="lg"
                        className="w-1/2 mt-2"
                        onClick={() => onPrint()}
                    >
                        Print
                    </Button>
                )}
            </div>
            <div style={{ display: 'none' }}>
                {invoice.sale.saleType !== 'Ecommerce' && (
                    <InvoiceLayout
                        ref={contentRef}
                        invoice={
                            invoice as IInvoice & {
                                sale: IDirectSale | IServiceSale
                            }
                        }
                    />
                )}
            </div>
        </div>
    )
}
