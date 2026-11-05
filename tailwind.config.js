/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        navy: {
          50: '#f0f5fa',
          100: '#e0ebf5',
          200: '#b8d2eb',
          300: '#85b3de',
          400: '#4d8ece',
          500: '#2c72b8',
          600: '#1e5997',
          700: '#19477b',
          800: '#173c66',
          900: '#183455',
          950: '#0e2037',
        },
        accent: {
          gold: '#c59b27',
          emerald: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
