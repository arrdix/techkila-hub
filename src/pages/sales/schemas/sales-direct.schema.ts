import { z } from 'zod'

export const createDirectSaleSchema = z.object({
    companyName: z
        .string()
        .min(1, { message: 'Company name must not be empty.' }),
    picName: z.string().min(1, { message: 'PIC name must not be empty.' }),
    phoneNumber: z
        .string()
        .min(1, { message: 'Phone number must not be empty.' }),
    address: z.string().min(1, { message: 'Address must not be empty.' }),
    discount: z.number().min(1, { message: 'Discount must not be empty.' }),
    branch: z.string().min(1, { message: 'Branch must not be empty.' }),
})

export type CreateDirectSaleSchema = z.infer<typeof createDirectSaleSchema>
