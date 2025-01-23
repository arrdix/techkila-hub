import { ISale } from '@/types/sale.ts'

export interface IInvoice {
    id: string
    no: string
    date: string
    total: number
    sale: ISale
}
