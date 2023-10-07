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

export function me() {
  const url = `Login/Me`
  return request('get', url, {}, true)
}

export function SearchUser(body) {
  const url = `User/SearchUser`
  return request('post', url, body, true)
}

export function createUser(body) {
  const url = `User/CreateUser`
  return request('post', url, body, true)
}

export function updateUser(body) {
  const url = `User/UpdateUser`
  return request('post', url, body, true)
}

export function getcompanybybu(id) {
  const url = `User/GetCompanyByBU?BuCode=${id}`
  return request('get', url, {}, true)
}

export function getcompanybyburolemanager(id, body) {
  const url = `User/GetCompanyByBuRoleManager?BuCode=${id}`
  return request('post', url, body, true)
}

export function deleteUser(id) {
  const url = `User/DeleteUser?id=${id}`
  return request('delete', url, {}, true)
}

export function getcompanybynotinbu(id) {
  const url = `User/GetCompanyByNotInBU?BuCode=${id}`
  return request('get', url, {}, true)
}
