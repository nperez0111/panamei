const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/panamei/'
    }
} : {}

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Panamei Seafood Selector',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { hid: 'description', name: 'description', content: 'Panamei Seafood Selector' }
        ],
        link: [
            { rel: 'apple-touch-icon', href: '/Icon-60@2x.png', sizes: '120x120' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/Icon-60@3x.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    plugins: ['~/plugins/vuetify.js'],
    css: [
        '~/assets/style/app.styl'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        vendor: [
            '~/plugins/vuetify.js'
        ],
        extractCSS: true,
        /*
         ** Run ESLint on save
         */
    },
    ...routerBase
}