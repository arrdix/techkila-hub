import { AxiosInstance } from 'axios'
import { axiosInstance } from '@/libs/axios.ts'
import { EcommerceSalesResponse } from '@/services/ecommerce-sales/ecommerce-sales.response.ts'
import { CreateEcommerceSalesDto } from '@/services/ecommerce-sales/ecommerce-sales.dto.ts'

export class EcommerceSalesService {
    api: AxiosInstance = axiosInstance

    async getAll(): Promise<EcommerceSalesResponse[]> {
        const response = await this.api.get('ecommerce-sale')
        return response.data
    }

    async create(
        payload: CreateEcommerceSalesDto
    ): Promise<EcommerceSalesResponse> {
        const response = await this.api.post('ecommerce-sale', payload)
        return response.data
    }
}
