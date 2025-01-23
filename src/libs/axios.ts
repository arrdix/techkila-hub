import axios from 'axios'
import { BASE_URL } from '@/config.ts'

export const axiosInstance = axios.create({ baseURL: BASE_URL })
axiosInstance.defaults.headers['ngrok-skip-browser-warning'] =
    'SKIP NGROK BROWSER WARNING'
