import { Branch } from '@/types/enum.ts'

export interface IServiceSales {
    companyName: string
    picName: string
    phoneNumber: string
    address: string
    serviceName: string
    total: number
    discount: number
    branch: Branch
}
