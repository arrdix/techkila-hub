import { Branch } from '@/types/enum.ts'

export interface IServiceSale {
    companyName: string
    picName: string
    phoneNumber: string
    address: string
    serviceName: string
    total: number
    discount: number
    branch: Branch
}
