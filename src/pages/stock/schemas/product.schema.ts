import { z } from 'zod'

export const productSchema = z.object({
    id: z.string().min(1, { message: 'Id must not be empty' }),
    name: z.string().min(1, { message: 'Name must not be empty' }),
})
export type ProductSchema = z.infer<typeof productSchema>
