/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '18px',
        xs: '0.75rem',
        sm: '0.875rem',
        // ... other font sizes
        custom: '9px',
        extraLarge: '32px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'so-small': '300px', // Custom breakpoint for tablets
        'max-small': '200px', // Custom breakpoint for mobile devices
      },
    },
  },
  plugins: [],
}