import { QueryReturn } from '@/services/shared/query-return.ts'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { InvoiceService } from '@/services/invoice/invoice.service.ts'
import { InvoiceResponse } from '@/services/invoice/invoice.response.ts'

interface UseGetInvoiceReturn extends QueryReturn {
    invoice?: InvoiceResponse
}

export function useGetInvoice(id: string): UseGetInvoiceReturn {
    const api = new InvoiceService()

    const {
        data: invoice,
        error,
        isPending,
        isFetching,
        isLoading,
    } = useQuery({
        queryKey: ['invoice', id],
        queryFn: () => api.get(id),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })

    return useMemo(
        () => ({
            invoice,
            error,
            isFetching: isLoading || isFetching || isPending,
        }),
        [invoice, error, isPending, isLoading, isFetching]
    )
}
