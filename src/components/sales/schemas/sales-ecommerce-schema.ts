import { z } from 'zod'

export const createEcommerceSaleSchema = z.object({
    orderNo: z.string().min(1, { message: 'Order no must not be empty.' }),
    total: z.number().min(1, { message: 'Total must not be empty.' }),
})

export type CreateEcommerceSaleSchema = z.infer<
    typeof createEcommerceSaleSchema
>
