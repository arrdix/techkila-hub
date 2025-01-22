import { Branch, Platform } from '@/types/enum.ts'

export interface IEcommerce {
    id: number
    saleType: 'ECommerce'
    orderNo: string
    platform: Platform
    branch: Branch
}

export interface IDirectSale {
    id: string
    saleType: 'DirectSale'
    companyName: string
    address: string
    picName: string
    phoneNumber: string
    discount: number
    branch: Branch
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

export type ISale = IEcommerce | IDirectSale | IServiceSale
