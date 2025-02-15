/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dev: '#fcba03',
                background: '#ffffff',
                foreground: '#2b2b2b',
                accent: '#40becf',
                muted: '#858585',
                error: '#eb0000',
                success: '#00a329',
                link: '#b0b0b0',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                base: 'rgba(200, 200, 200, 0.3) 0px 0px 15px',
                top: 'rgb(38, 57, 77) 0px 0px 20px -10px',
            },
            fontSize: {
                xxs: '.5rem',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
