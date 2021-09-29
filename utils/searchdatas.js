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

export function binddatafrist(username) {
  const url = `Data/BindDataFrist?Username=${username}`
  return request('get', url, {}, true)
}

export function getboardbycabinet(cabinetcode) {
  const url = `Data/GetBoardByCabinet?CabinetCode=${cabinetcode}`
  return request('get', url, {}, true)
}

export function savemangedata(body) {
  const url = `Data/SaveDataManages`
  return request('post', url, body, true)
}

export function searchdata(body) {
  const url = `Data/SearchData`
  return request('post', url, body, true)
}

export function savedatasearchfiletransaction(body) {
  const url = `Data/SaveDataSearchFileTransaction`
  return request('post', url, body, true)
}

export function savedatafileupload(body) {
  const url = `Data/SaveDataSearchFileUpload`
  return request('post', url, body, true)
}

export function searchdatafile(id) {
  const url = `Data/SearchDataFile?id=${id}`
  return request('get', url, {}, true)
}

export function searchdatafilebykeyword(id, keyword) {
  const url = `Data/SearchDataFileByKeywordInAlfresco?id=${id}&keyword=${keyword}`
  return request('get', url, {}, true)
}

export function getpathtransaction(id) {
  const url = `Data/GetPathTransaction?id=${id}`
  return request('get', url, {}, true)
}

export function deletefiletransaction(id, user, body) {
  const url = `Data/DeleteDataFileTransaction?id=${id}&user=${user}`
  return request('post', url, body, true)
}

export function updatemeetingnameintransaction(id, meetingname, user) {
  const url = `Data/UpdateMeetingName?id=${id}&meetingName=${meetingname}&userUpdate=${user}`
  return request('post', url, {}, true)
}

export function download(tid, filename, uid) {
  filename = ''
  // console.log('item dowload js uid', uid)
  const url = `Data/DowloadFiles?tid=${tid}&filename=${filename}&uidf=${uid}`
  // console.log('url call api', url)
  return request('get', url, {}, true)
}

export function moveupandmovedownfiletransaction(
  id,
  user,
  index,
  status,
  body
) {
  const url = `Data/MoveUpAndMoveDown?id=${id}&user=${user}&index=${index}&status=${status}`
  return request('post', url, body, true)
}

export function savefileuploaddata(body) {
  const url = `Data/SaveDataFileUpload`
  return request('post', url, body, true)
}

export function updatefileuploaddata(body) {
  const url = `Data/UpdateDataFileUpload`
  return request('post', url, body, true)
}

export function deletefileuploaddata(body) {
  const url = `Data/DeleteDataFileUpload`
  return request('post', url, body, true)
}

export function downloadfileuploaddata(body) {
  const url = `Data/DeleteDataFileUpload`
  return request('post', url, body, true)
}

export function getmeetinground(body) {
  const url = `Data/GetMeetingRound`
  return request('post', url, body, true)
}

export function getmeetingdate(body) {
  const url = `Data/GetMeetingDate`
  return request('post', url, body, true)
}

export function savescannerstatuslog(body) {
  const url = `Data/SaveLogsScannerStatus?StatusLogs=${body}`
  return request('post', url, {}, true)
}

export function checkmanagerrolereadonly(transid, username) {
  const url = `Data/CheckManagerRoleReadOnly?transid=${transid}&username=${username}`
  return request('post', url, {}, true)
}

export function sendfiletoserver(data) {
  const url = `Data/SendFilesToServer`
  return request('post', url, data, true)
}

export function generateUniqeID() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

export function sumTotalPage(object) {
  const msgTotal = object.reduce(function(prev, cur) {
    // return prev + (cur.amount - cur.amount * cur.discount)
    return prev + Number(cur.pageCount)
  }, 0)
  return msgTotal
  // var itemsInCart= [
  //    { name: "Suya", price: 69, qty: 3 },
  //     { name: "Matooke", price: 46, qty: 2 }
  //    ];
  //    var total = itemsInCart.reduce(function(prev, cur)
  //     { return prev +(cur.price * cur.qty); }, 0);
  // document.write('Total of Cart Items:', total);
}

export function convertarraytojson(object) {
  object.forEach(function(item) {
    const jsosforitem = JSON.stringify(item)
    return jsosforitem
  })
}

export function getlastseq(object) {
  const max = Math.max.apply(
    null,
    object.map((item) => item.seqNumber)
  )
  return max + 1
}
// export function runcmd() {
//   const shell = WScript.CreateObject('WScript.Shell')
//   shell.Run('command here')
// }
