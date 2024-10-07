/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#ffffff',
                foreground: '#2b2b2b',
                accent: '#40becf',
                muted: '#858585',
            },
        },
    },
    plugins: [],
}
