import axios from 'axios'

const getToken = function() {
  if (process.server) {
    return
  }
  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local')
  }
}

export async function request(method, url, data, auth = false) {
  // const headers = {}
  const headers = {
    // Authorization: getToken(),
  }
  if (auth) {
    // headers['Authorization'] = getToken()
    headers.Authorization = getToken()
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Content-Type'] = 'application/json'
  }
  // const HOSTNAME = `https://csodms.scg.com/csoapi/api/`
  // const HOSTNAME = `http://172.29.0.195:82/HulkApi/api/`
  const HOSTNAME = `https://localhost:44378/api/`
  // const HOSTNAME = `http://localhost:81/api/`
  url = HOSTNAME + url
  try {
    const response = await axios({
      method,
      mode: 'no-cors',
      url,
      data,
      headers
    })
    return response
  } catch (error) {
    var sdsdf = ""
    return error
  }
}
