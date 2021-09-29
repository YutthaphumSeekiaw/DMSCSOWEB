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

export function bindingfrist() {
  const url = `Board/BindDataFrist`
  return request('get', url, {}, true)
}

export function getlastboardcode() {
  const url = `Board/GetLastBoardCode`
  return request('get', url, {}, true)
}

export function getboardbycabinet(cabinetcode, boardname) {
  const url = `Board/GetBoard?CabinetCode=${cabinetcode}&BoardName=${boardname}`
  return request('get', url, {}, true)
}

export function addboard(body) {
  const url = `Board/AddBoard`
  return request('post', url, body, true)
}

export function updateboard(body) {
  const url = `Board/UpdateBoard`
  return request('post', url, body, true)
}

export function deleteboard(body) {
  const url = `Board/DeleteBoard`
  return request('post', url, body, true)
}

export function undeleteboard(body) {
  const url = `Board/UnDeleteBoard`
  return request('post', url, body, true)
}
