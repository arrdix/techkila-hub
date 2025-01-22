import {
    UseMutateAsyncFunction,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { MutationReturn } from '@/services/shared/mutation-return.ts'
import { EcommerceSalesService } from '@/services/ecommerce-sales/ecommerce-sales.service.ts'
import { EcommerceSalesResponse } from '@/services/ecommerce-sales/ecommerce-sales.response.ts'
import { CreateEcommerceSalesDto } from '@/services/ecommerce-sales/ecommerce-sales.dto.ts'
import { toast } from 'react-toastify'

export interface UseCreateEcommerceSaleReturn extends MutationReturn {
    mutateEcommerceSale: UseMutateAsyncFunction<
        EcommerceSalesResponse | null,
        Error,
        { payload: CreateEcommerceSalesDto }
    >
}

export function useCreateEcommerceSale(): UseCreateEcommerceSaleReturn {
    const api = new EcommerceSalesService()
    const client = useQueryClient()

    const { mutateAsync: mutateEcommerceSale, error } = useMutation<
        EcommerceSalesResponse | null,
        Error,
        { payload: CreateEcommerceSalesDto }
    >({
        mutationFn: ({ payload }) => api.create(payload),
        onSuccess: async () => {
            await client.refetchQueries({ queryKey: ['ecommerce-sales'] })
            toast.success('Ecommerce sale created.')
        },
        onError: () =>
            toast.error('Create sale failed. Please try again later.'),
    })

    return { mutateEcommerceSale, error }
}
