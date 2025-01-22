import { z } from 'zod'

export const loginSchema = z.object({
    username: z.string().min(1, { message: 'Username must not be empty.' }),
    password: z.string().min(1, { message: 'Password must not be empty.' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
