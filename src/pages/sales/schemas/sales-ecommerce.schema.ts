import { z } from 'zod'
import { Branch, Platform } from '@/types/enum.ts'

export const createEcommerceSaleSchema = z.object({
    orderNo: z.string().min(1, { message: 'Order no must not be empty.' }),
    total: z.number().min(1, { message: 'Total must not be empty.' }),
    branch: z
        .nativeEnum(Branch)
        .refine((value) => Object.values(Branch).includes(value as Branch), {
            message: 'Please select the branch.',
        }),
    platform: z
        .nativeEnum(Platform)
        .refine(
            (value) => Object.values(Platform).includes(value as Platform),
            { message: 'Please select the platform.' }
        ),
})

export type CreateEcommerceSaleSchema = z.infer<
    typeof createEcommerceSaleSchema
>
