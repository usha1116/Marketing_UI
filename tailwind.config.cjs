module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A6FF8',
        darkbg: '#0b0b0d'
      },
      borderRadius: {
        xl22: '22px'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(30,40,60,0.08)'
      }
    }
  },
  plugins: [],
}
