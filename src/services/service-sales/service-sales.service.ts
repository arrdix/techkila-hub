import { AxiosInstance } from 'axios'
import { axiosInstance } from '@/libs/axios.ts'
import { CreateServiceSaleDto } from '@/services/service-sales/service-sales.dto.ts'
import { ServiceSalesResponse } from '@/services/service-sales/service-sales.response.ts'

export class ServiceSalesService {
    api: AxiosInstance = axiosInstance

    async create(payload: CreateServiceSaleDto): Promise<ServiceSalesResponse> {
        const response = await this.api.post('service-sale', payload)
        return response.data
    }
}
