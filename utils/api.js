import axios from 'axios'

const getToken = function() {
  if (process.server) {
    return
  }
  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local')
  }
}

// const token = app.$csrfToken()

// if (!config.headers['X-CSRF-Token'] && token)
//   config.headers['X-CSRF-Token'] = token

export async function request(method, url, data, auth = false) {
  // const headers = {}
  const headers = {
    // Authorization: getToken(),
  }
  if (auth) {
    // headers['Authorization'] = getToken()
    headers.Authorization = getToken()
    // headers['Access-Control-Allow-Origin'] =
    //   'https://csodms.scg.com/csoapi/api/' // '*'
    headers['Access-Control-Allow-Origin'] = 'https://10.100.12.82' // '*'
    // headers['Access-Control-Allow-Origin'] = 'https://localhost:44378' // '*'
    // headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE' //, PATCH,OPTIONS'
    headers['Content-Type'] = 'application/json'
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    // eslint-disable-next-line dot-notation
    headers['Pragma'] = 'no-cache'
    // eslint-disable-next-line dot-notation
    headers['Expires'] = 0
    headers['X-Frame-Options'] = 'DENY' // 'SAMEORIGIN'
    headers['X-Content-Type-Option'] = 'nosniff'
    headers['Content-Security-Policy'] =
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    headers['Strict-Transport-Security'] = 'max-age=15768000 ; preload'
  }

  // const options = {
  //   xsrfCookieName: 'XSRF-TOKEN',
  //   xsrfHeaderName: 'X-XSRF-TOKEN'
  // }
  // const HOSTNAME = `https://csodms.scg.com/csoapi/api/`
  // const HOSTNAME = `https://localhost:44378/api/`
  const HOSTNAME = `https://10.100.12.82/dmscsoapi/api/`
  url = HOSTNAME + url
  try {
    const response = await axios({
      method,
      // mode: 'no-cors',
      url,
      data,
      headers,
      // options
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    })
    return response
  } catch (error) {
    return error
  }
}
