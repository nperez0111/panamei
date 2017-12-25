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
            { hid: 'description', name: 'description', content: 'Panamei Seafood Selector' }
        ],
        link: [
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