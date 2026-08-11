/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        chocolate: {
          50: '#FDF8F3',
          100: '#F9ECDF',
          200: '#F2D5BB',
          300: '#E8B78E',
          400: '#DC9560',
          500: '#D07A3E',
          600: '#B8632C',
          700: '#8B4520',
          800: '#6B341A',
          900: '#4F2714',
          950: '#2C1410',
        },
        cream: {
          50: '#FFFEFC',
          100: '#FFFBF5',
          200: '#FEF5E8',
          300: '#FDEBD5',
          400: '#FBE0C2',
          500: '#F5D0A0',
        },
        leaf: {
          50: '#F4F9F5',
          100: '#E5F2E7',
          200: '#CADEC9',
          300: '#9ABD99',
          400: '#6A9E68',
          500: '#4A7C59',
          600: '#396349',
          700: '#2C4E3B',
          800: '#1F3A2C',
          900: '#14261F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        'ch': '1.25rem',
      },
      boxShadow: {
        'hill': '0 8px 32px rgba(107, 52, 26, 0.12)',
        'hill-lg': '0 12px 48px rgba(107, 52, 26, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
