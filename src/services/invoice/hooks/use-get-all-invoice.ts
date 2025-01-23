import { QueryReturn } from '@/services/shared/query-return.ts'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { InvoiceService } from '@/services/invoice/invoice.service.ts'
import { InvoiceResponse } from '@/services/invoice/invoice.response.ts'

interface UseGetAllInvoiceReturn extends QueryReturn {
    invoices: InvoiceResponse[]
}

export function useGetAllInvoice(): UseGetAllInvoiceReturn {
    const api = new InvoiceService()

    const {
        data: invoices,
        error,
        isPending,
        isFetching,
        isLoading,
    } = useQuery({
        queryKey: ['invoices'],
        queryFn: () => api.getAll(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })

    return useMemo(
        () => ({
            invoices: invoices || [],
            error,
            isFetching: isLoading || isFetching || isPending,
        }),
        [invoices, error, isPending, isLoading, isFetching]
    )
}
