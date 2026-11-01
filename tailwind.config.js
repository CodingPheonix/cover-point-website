/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B10',
        surface: {
          DEFAULT: '#121218',
          card: '#161620',
          elevated: '#1C1C28',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#222232',
        },
        brand: {
          blue: '#2563EB',
          lightBlue: '#38BDF8',
          electric: '#00D2FF',
          darkBlue: '#1D4ED8',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(56, 189, 248, 0.2)',
        'glow-md': '0 0 30px rgba(37, 99, 235, 0.25)',
        'glow-lg': '0 0 50px rgba(56, 189, 248, 0.3)',
        'glow-cyan': '0 0 25px rgba(0, 210, 255, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'roll-cover': 'roll 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        roll: {
          '0%': { transform: 'rotateY(0deg) rotateZ(0deg)' },
          '50%': { transform: 'rotateY(180deg) rotateZ(4deg)' },
          '100%': { transform: 'rotateY(360deg) rotateZ(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

