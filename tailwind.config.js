/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#09090b',       // Fondo principal oscuro profundo
          surface: '#121215',  // Superficies intermedias
          card: '#18181b',     // Fondo de tarjetas y componentes
          border: '#27272a',   // Bordes sutiles
          text: '#fafafa',     // Texto blanco nítido
          muted: '#a1a1aa'     // Texto secundario gris plata
        },
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',      // Rojo rubí vibrante
          600: '#e11d48',      // Rojo carmesí principal
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
