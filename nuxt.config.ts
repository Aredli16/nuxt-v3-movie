// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        TMDB_API_KEY: process.env.TMDB_API_KEY
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '@/assets/style/default.scss'
    ],
    modules: [
        'nuxt-icon'
    ],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Poppins: [700]
        }
    }
})
