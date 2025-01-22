import { Branch } from '@/types/enum.ts'
import { Product } from '@/types/product.ts'

export interface IDirectSale {
    companyName: string
    picName: string
    phoneNumber: string
    address: string
    discount: number
    branch: Branch
    products: Product[]
}
