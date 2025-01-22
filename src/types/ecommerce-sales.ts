import { Branch, Platform } from '@/types/enum.ts'

export interface IEcommerceSales {
    orderNo: string
    total: number
    platform: Platform
    branch: Branch
}
