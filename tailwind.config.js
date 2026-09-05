/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#11110F',
          card: '#1B1A17',
          border: '#38372F',
          hover: '#292820',
          cyan: '#D7F000',
          violet: '#35352F',
          purple: '#53534A',
          emerald: '#8FA63A',
          amber: '#D99A27',
          pink: '#E36D43',
        },
        cyan: {
          300: '#E5F77A',
          400: '#D7F000',
          500: '#C4DB00',
          600: '#A9BC00',
          950: '#343900',
        },
        purple: {
          300: '#B8B8A8',
          400: '#929286',
          500: '#6F7067',
          600: '#55564F',
          950: '#24241F',
        },
        pink: {
          400: '#F08B62',
          500: '#E36D43',
          600: '#BE5332',
        },
        emerald: {
          300: '#C6D978',
          400: '#AFC653',
          500: '#8FA63A',
          600: '#70822D',
          950: '#252D10',
        },
        amber: {
          400: '#F0BC4E',
          500: '#D99A27',
          600: '#B77714',
          950: '#33240D',
        },
        orange: {
          500: '#C9693D',
          600: '#A84D2C',
        },
        blue: {
          500: '#77786D',
          600: '#5D5E56',
        },
        teal: {
          400: '#A5B55A',
          500: '#899B42',
          600: '#6E8033',
          700: '#536129',
        },
        indigo: {
          500: '#66675F',
          600: '#50514B',
        },
        rose: {
          500: '#D66545',
          600: '#B14B31',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.45)',
        'glow-violet': '0 0 25px -5px rgba(168, 85, 247, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.45)',
        'glow-pink': '0 0 25px -5px rgba(236, 72, 153, 0.45)',
        'neon-box': 'inset 0 0 15px rgba(0, 240, 255, 0.15), 0 0 20px rgba(0, 240, 255, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
