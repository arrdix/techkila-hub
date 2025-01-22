import { AxiosInstance } from 'axios'
import { axiosInstance } from '@/libs/axios.ts'
import { InvoiceResponse } from '@/services/invoice/invoice.response.ts'

export class InvoiceService {
    api: AxiosInstance = axiosInstance

    async getAll(): Promise<InvoiceResponse[]> {
        const response = await this.api.get('/invoice')
        return response.data
    }
}
