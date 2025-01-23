import { Branch, Platform } from '@/types/enum.ts'
import { ProductSold } from '@/types/product.ts'

export interface IEcommerceSale {
    id: number
    saleType: 'Ecommerce'
    orderNo: string
    platform: Platform
    branch: Branch
}

export interface IDirectSale {
    id: string
    saleType: 'Direct'
    companyName: string
    address: string
    picName: string
    phoneNumber: string
    discount: number
    branch: Branch
    products: ProductSold[]
}

export interface IServiceSale {
    id: string
    saleType: 'Service'
    companyName: string
    address: string
    picName: string
    phoneNumber: string
    discount: number
    branch: string
    serviceName: string
}

export type ISale = IEcommerceSale | IDirectSale | IServiceSale
