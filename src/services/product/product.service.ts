import { AxiosInstance } from 'axios'
import { ProductOptionResponse } from '@/services/product/product.response.ts'
import { axiosInstance } from '@/libs/axios.ts'

export class ProductService {
    api: AxiosInstance = axiosInstance

    async getOptions(): Promise<ProductOptionResponse[]> {
        const response = await this.api.get('/product/options')
        return response.data
    }
}
