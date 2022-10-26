// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '@/assets/style/default.scss'
    ],
    plugins: [{
        src: 'bootstrap/dist/js/bootstrap.bundle.js',
        mode: "client"
    }],
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
