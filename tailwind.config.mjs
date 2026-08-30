/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // 知图 · Apple 风格配色
        ink: '#1d1d1f',
        inkSoft: '#424245',
        inkMuted: '#6e6e73',
        inkFaint: '#86868b',
        soft: '#f5f5f7',
        line: '#d2d2d7',
        lineSoft: '#e8e8ed',
        accent: '#0071e3',
        accentHover: '#0077ed',
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"',
          '"Helvetica Neue"', '"PingFang SC"', '"Hiragino Sans GB"',
          '"Microsoft YaHei"', '"Segoe UI"', 'Roboto', 'sans-serif',
        ],
      },
      borderRadius: {
        card: '18px',
        cardLg: '24px',
      },
    },
  },
  plugins: [],
};