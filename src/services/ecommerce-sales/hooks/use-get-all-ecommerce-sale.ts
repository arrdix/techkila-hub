import { QueryReturn } from '@/services/shared/query-return.ts'
import { EcommerceSalesService } from '@/services/ecommerce-sales/ecommerce-sales.service.ts'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { EcommerceSalesResponse } from '@/services/ecommerce-sales/ecommerce-sales.response.ts'

interface UseGetAllEcommerceSaleReturn extends QueryReturn {
    ecommerceSales: EcommerceSalesResponse[]
}

export function useGetAllEcommerceSale(): UseGetAllEcommerceSaleReturn {
    const api = new EcommerceSalesService()

    const {
        data: ecommerceSales,
        error,
        isPending,
        isFetching,
        isLoading,
    } = useQuery({
        queryKey: ['ecommerce-sales'],
        queryFn: () => api.getAll(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })

    return useMemo(
        () => ({
            ecommerceSales: ecommerceSales || [],
            error,
            isFetching: isLoading || isFetching || isPending,
        }),
        [ecommerceSales, error, isPending, isLoading, isFetching]
    )
}
