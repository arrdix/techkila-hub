import { Branch, Platform } from '@/types/enum.ts'

export interface IEcommerceSale {
    orderNo: string
    total: number
    platform: Platform
    branch: Branch
}
