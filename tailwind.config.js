/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#060B14',
        'electric-blue': '#00D9FF',
        'deep-navy': '#1A1F2E',
        'accent-purple': '#7A5CFF',
        'highlight-cyan': '#55FFFF',
        'text-secondary': '#A8B4C8',
      },
      backgroundImage: {
        'glass': 'rgba(255, 255, 255, 0.08)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(122, 92, 255, 0.5)',
        'glow-cyan': '0 0 30px rgba(85, 255, 255, 0.4)',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
