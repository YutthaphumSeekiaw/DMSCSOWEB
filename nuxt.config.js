const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'CSO DMS',
    // '%s',
    title: 'CSO DMS' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/font/SCG-Reg.otf'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@mdi/font/css/materialdesignicons.css', '~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/auth-next',
    'nuxt-sweetalert2',
    'nuxt-helmet'
    // 'nuxt-material-design-icons'
  ],

  // helmet options
  // @see https://helmetjs.github.io/docs/
  helmet: {
    /*
    frameguard: false,
    ...
    */
    frameguard: { action: 'deny' }
  },
  router: {
    middleware: ['auth']
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  // auth: {
  //   auth: {
  //     redirect: {
  //       login: '/login'
  //     }
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'https://csodms.scg.com/csoapi/api/Login/Sign_In',
  //           method: 'post',
  //           propertyName: 'result.token'
  //         },
  //         logout: {
  //           url: 'https://csodms.scg.com/csoapi/api/Login/Sign_Out',
  //           method: 'delete'
  //         },
  //         user: {
  //           url: 'https://csodms.scg.com/csoapi/api/Login/me',
  //           method: 'get',
  //           propertyName: 'result'
  //         }
  //       }
  //       // tokenName: 'auth-token'

  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //       // autoFetchUser: true
  //     }
  //   }
  // },

  // auth: {
  //   auth: {
  //     redirect: {
  //       login: '/login'
  //     }
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'https://localhost:44378/api/Login/Sign_In',
  //           method: 'post',
  //           propertyName: 'result.token'
  //         },
  //         logout: {
  //           url: 'https://localhost:44378/api/Login/Sign_Out',
  //           method: 'post'
  //         },
  //         user: {
  //           url: 'https://localhost:44378/api/Login/me',
  //           method: 'get',
  //           propertyName: 'result'
  //         }
  //       }
  //       // tokenName: 'auth-token'

  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //       // autoFetchUser: true
  //     }
  //   }
  // },

  auth: {
    // localStorage: false,
    strategies: {
      AAD: {
        scheme: 'openIDConnect',
        clientId: '79f5c415-c232-41ef-b776-2937f2bf048c',
        endpoints: {
          configuration:
            'https://login.microsoftonline.com/df47cc98-0e84-4ab8-aaf3-88df33116bc9/v2.0/.well-known/openid-configuration'
        },
        // idToken: {
        //   property: "id_token",
        //   maxAge: 60 * 60 * 24 * 30,
        //   prefix: "_id_token.",
        //   expirationPrefix: "_id_token_expiration.",
        // },
        token: {
          property: 'id_token',
          type: 'Bearer',
          global: true,
          maxAge: 1800
        },
        responseType: 'code',
        grantType: 'authorization_code',
        scope: ['openid', 'profile'],
        codeChallengeMethod: 'S256'
      },
      local: {
        token: {
          property: 'result.token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        idToken: {
          property: 'result.token',
          maxAge: 60 * 60 * 24 * 30
          // prefix: "_id_token.",
          // expirationPrefix: "_id_token_expiration.",
        },
        // user: {
        //   property: 'user',
        //   autoFetch: true
        // },
        endpoints: {
          login: {
            url: 'https://localhost:44378/api/Login/Sign_In',
            method: 'post',
            propertyName: 'result.token'
          }
          // logout: {
          //   url: 'https://localhost:44378/api/Login/Sign_Out',
          //   method: 'post'
          // },
          // user: {
          //   url: 'https://localhost:44378/api/Login/me',
          //   method: 'get',
          //   propertyName: 'result'
          // }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      home: '/index'
    }
  },
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
