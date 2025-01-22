import { AxiosInstance } from 'axios'
import { axiosInstance } from '@/libs/axios.ts'
import { CreateDirectSaleDto } from '@/services/direct-sales/direct-sales.dto.ts'
import { DirectSalesResponse } from '@/services/direct-sales/direct-sales.response.ts'

export class DirectSalesService {
    api: AxiosInstance = axiosInstance

    async create(payload: CreateDirectSaleDto): Promise<DirectSalesResponse> {
        const response = await this.api.post('direct-sale', payload)
        return response.data
    }
}
