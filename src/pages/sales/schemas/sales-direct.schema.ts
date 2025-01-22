import { z } from 'zod'
import { productSchema } from '@/pages/stock/schemas/product.schema.ts'

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
    products: z.array(
        productSchema
            .pick({
                id: true,
            })
            .extend({
                quantity: z
                    .number({ message: 'Please provide a valid number.' })
                    .min(1, { message: 'Quantity must not be empty' }),
            }),
        {
            message: 'Please select at least 1 product.',
        }
    ),
})

export type CreateDirectSaleSchema = z.infer<typeof createDirectSaleSchema>
