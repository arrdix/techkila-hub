import { Branch, Platform } from '@/types/enum.ts'
import { v4 } from 'uuid'
import { Option } from '@/types/shared.ts'

export const DEFAULT_SERVICE_QUANTITY = 1

export const BRANCHES = Object.values(Branch).map((branch) => ({
    id: v4(),
    name: branch,
}))

export const PLATFORMS = Object.values(Platform).map((platform) => ({
    id: v4(),
    name: platform,
}))

export const getBranchOptions = async (): Promise<Option[]> => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(BRANCHES)
        }, 300)
    })
}

export const getPlatofrmOptions = async (): Promise<Option[]> => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(PLATFORMS)
        }, 300)
    })
}
