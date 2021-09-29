import { request } from './api'

// const HOSTNAME = `https://localhost:44378`

// export function index() {
//     const url = `${HOSTNAME}/api/v1/user/blogs`
//     return request('get', url, {}, true)
//   }

//   export function show(id) {
//     const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
//     return request('get', url, {}, true)
//   }

//   export function create(title, body) {
//     const url = `${HOSTNAME}/api/v1/user/blogs`
//     return request('post', url, { blog: { title, body } }, true)
//   }

//   export function update(id, title, body) {
//     const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
//     return request('put', url, { blog: { title, body } }, true)
//   }

//   export function destroy(id) {
//     const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
//     return request('delete', url, {}, true)
//   }

export function searchresetpassworddata(body) {
  const url = 'Login/Sign_Out'
  return request('post', url, body, true)
}

export function updateresetpassword(body) {
  const url = 'Login/ResetPassword'
  return request('put', url, body, true)
}

export function updateresetpasswordafterlogin(body) {
  const url = 'Login/ResetPasswordAfterLogin'
  return request('put', url, body, true)
}
