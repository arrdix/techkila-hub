import {
    UseMutateAsyncFunction,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { MutationReturn } from '@/services/shared/mutation-return.ts'
import { toast } from 'react-toastify'
import { ServiceSalesResponse } from '@/services/service-sales/service-sales.response.ts'
import { CreateServiceSaleDto } from '@/services/service-sales/service-sales.dto.ts'
import { ServiceSalesService } from '@/services/service-sales/service-sales.service.ts'

export interface UseCreateServiceSaleReturn extends MutationReturn {
    mutateServiceSale: UseMutateAsyncFunction<
        ServiceSalesResponse | null,
        Error,
        { payload: CreateServiceSaleDto }
    >
}

export function useCreateServiceSale(): UseCreateServiceSaleReturn {
    const api = new ServiceSalesService()
    const client = useQueryClient()

    const { mutateAsync: mutateServiceSale, error } = useMutation<
        ServiceSalesResponse | null,
        Error,
        { payload: CreateServiceSaleDto }
    >({
        mutationFn: ({ payload }) => api.create(payload),
        onSuccess: async () => {
            await client.refetchQueries({ queryKey: ['invoices'] })
            toast.success('Service sale created.')
        },
        onError: () =>
            toast.error('Create sale failed. Please try again later.'),
    })

    return { mutateServiceSale, error }
}
