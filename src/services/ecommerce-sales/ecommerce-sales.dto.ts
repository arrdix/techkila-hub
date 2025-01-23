import { z } from 'zod'
import { createEcommerceSaleSchema } from '@/pages/sales/schemas/sales-ecommerce.schema.ts'

export type CreateEcommerceSalesDto = z.infer<typeof createEcommerceSaleSchema>
