import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, './src'),
//         },
//     },
// })

export default ({ mode }: { mode: string }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    return defineConfig({
        publicDir: './public',
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        // server: {
        //     port: 3000,
        //     host: true,
        // },
        // preview: {
        //     port: 443,
        //     host: true,
        // https: {
        //   cert: process.env.VITE_TLS_CERT,
        //   key: process.env.VITE_TLS_KEY,
        // },
        // },
    })
}
