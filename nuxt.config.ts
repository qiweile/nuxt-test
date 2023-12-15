// https://nuxt.com/docs/api/configuration/nuxt-config
const apiBase = import.meta.env.VITE_BASE_API
export default defineNuxtConfig({
    nitro: {
        // logLevel: 'warn' || 'error'
        // 'info'（默认）, 'warn', 'error', 或 'silent'
    },
    devtools: { enabled: true },
    runtimeConfig: {
        // 只在服务器端可用的私有键
        apiSecret: '123',
        // public中的键也可以在客户端使用
        public: {
            apiBase: '/api'
        }
    },
    webpack: {
        loaders: {
            vue: {
                hotReload: true,
            }
        }
    },
    modules: [
        '@pinia/nuxt',
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ },
    plugins: [
        { src: "@/assets/iconfont/iconfont.js", ssr: false },
        '@/plugins/persistedState.client.js',
        '@/plugins/error-handler.js'
    ],
    css: [
        'element-plus/dist/index.css',
        '@/assets/iconfont/iconfont.css',
        '@/assets/styles/global.scss',
    ],

    devServer: {
        port: 3001, // 默认: 3000,
    }
})
