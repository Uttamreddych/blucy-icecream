/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blucy: {
          blue: '#0868E8',
          navy: '#0739A8',
          sky: '#12B9F4',
          pink: '#FF1689',
          softpink: '#FFF0F7',
          ice: '#EAF7FF',
          text: '#102C70',
          muted: '#56749E',
        }
      },
      fontFamily: {
        heading: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(8, 104, 232, 0.15)',
        'brand-pink': '0 10px 25px -5px rgba(255, 22, 137, 0.25)',
        'card-hover': '0 20px 40px -10px rgba(7, 57, 168, 0.18)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

