import { Adal } from './adal-plugin/index'

export default ({ app, error, $axios }, inject) => {
  inject(
    'adal',
    new Adal({
      config: {
        tenant: 'df47cc98-0e84-4ab8-aaf3-88df33116bc9',
        clientId: '4aaca67f-b2bf-4a7a-ae81-3fc782a28c51',
        redirectUri: 'http://localhost:3000/login',
        cacheLocation: 'localStorage'
      }
    })
  )
}
