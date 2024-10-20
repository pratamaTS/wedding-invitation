  import { defineConfig } from 'vite'
  import { resolve } from 'path'
  import vue from '@vitejs/plugin-vue'
  import SVGLoader from 'vite-svg-loader'


  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue(), SVGLoader()],
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~@': resolve(__dirname, "/src"),
      }
    },
    server: {
      host: true
    },
    server: {
      proxy: {
        "/api": {
          changeOrigin: true,
          target: "http://localhost:8000",
          historyApiFallback: true,
        }
      },
      host: true
    },
    base: '/'
  })
