/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
            'sm':{'min':'0px', 'max':'765px'},
            'md':'768px',
            'lg':'1024px'
      },
      colors: {
        BgColor:'var(--color-BgColor)',
        TextColor:'var(--color-TextColor)',
        BgBorder: 'var(--color-BgBorder)'
      },
    },
    fontFamily:{
  Outfit:['Outfit']
    }
  },
  plugins: [],
}
