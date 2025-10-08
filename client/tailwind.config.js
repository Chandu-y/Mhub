
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#FFFFFF',
        light: '#F8F9FA',
        dark: '#212121',
        accent: '#4285F4',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(0,123,255,0.08)',
        cardHover: '0 4px 16px 0 rgba(0,123,255,0.16)',
      },
      borderRadius: {
        xl: '16px',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      spacing: {
        'base': '8px',
      },
      boxShadow: {
        'elevation-0': 'none',
        'elevation-1': '0 1px 2px 0 rgba(76,175,80,0.08)',
        'elevation-2': '0 2px 8px 0 rgba(76,175,80,0.12)',
      },
    },
  },
  plugins: [],
}
