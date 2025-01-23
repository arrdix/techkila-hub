import {
    UseMutateAsyncFunction,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { MutationReturn } from '@/services/shared/mutation-return.ts'
import { toast } from 'react-toastify'
import { DirectSalesService } from '@/services/direct-sales/direct-sales.service.ts'
import { DirectSalesResponse } from '@/services/direct-sales/direct-sales.response.ts'
import { CreateDirectSaleDto } from '@/services/direct-sales/direct-sales.dto.ts'

export interface UseCreateDirectSaleReturn extends MutationReturn {
    mutateDirectSale: UseMutateAsyncFunction<
        DirectSalesResponse | null,
        Error,
        { payload: CreateDirectSaleDto }
    >
}

export function useCreateDirectSale(): UseCreateDirectSaleReturn {
    const api = new DirectSalesService()
    const client = useQueryClient()

    const { mutateAsync: mutateDirectSale, error } = useMutation<
        DirectSalesResponse | null,
        Error,
        { payload: CreateDirectSaleDto }
    >({
        mutationFn: ({ payload }) => api.create(payload),
        onSuccess: async () => {
            await client.refetchQueries({ queryKey: ['invoices'] })
            toast.success('Direct sale created.')
        },
        onError: () =>
            toast.error('Create sale failed. Please try again later.'),
    })

    return { mutateDirectSale, error }
}
