import { ProductCategory } from '@/types/enum.ts'

export interface Product {
    id: string
    name: string
}

export interface ProductSold {
    id: string
    name: string
    price: number
    quantity: number
    category: ProductCategory
}
