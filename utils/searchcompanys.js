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
  const url = `Company/BindCompanyFrist`
  return request('get', url, {}, true)
}

export function getmaxid() {
  const url = `Company/GetMaxID`
  return request('get', url, {}, true)
}

export function searchcompanydata(body) {
  const url = `Company/SearchCompany`
  return request('post', url, body, true)
}

export function addcompanydata(bucode, body) {
  const url = `Company/AddCompany?buCode=${bucode}`
  return request('post', url, body, true)
}

export function updatecompanydata(bucode, newbucode, oldcompanycode, body) {
  const url = `Company/UpdateCompany?buCode=${bucode}&newBuCode=${newbucode}&oldCompanyCode=${oldcompanycode}`
  return request('post', url, body, true)
}

export function deletecompanydata(bucode, companycode) {
  const url = `Company/DeleteCompany?buCode=${bucode}&companyCode=${companycode}`
  return request('post', url, {}, true)
}
