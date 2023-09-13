window.DeviceStatus = {
  Error: 0,
  UnconnectedSocket: 1,
  ConnectedSocket: 2,
  UnconnectedDevice: 3,
  ConnectedDevice: 4,
  Maximumdigit: 4,
  Success: 6
}

window.SeqRequestClient = {
  onOpenScanner: 200,
  ReceiveData: 201,

  Error: 260
}

window.fingerprint = {
  lastCmd: 0,
  image: '',
  template1: null,
  template2: null,
  verify: null,
  DeviceStatus: window.DeviceStatus.UnconnectedDevice
}
let deviceScanobj
function DeviceScan() {
  //   const inc = document.getElementById('incomming')
  const WsImpl = window.WebSocket || window.MozWebSocket
  //   const form = document.getElementById('sendForm')
  //   const input = document.getElementById('sendText')

  // inc.innerHTML += "connecting to server ..<br/>";

  // create a new websocket and connect
  this.ws = new WsImpl('ws://127.0.0.1:10111/')
  // window.ws = new wsImpl('ws://192.168.1.221:8080/');

  // when data is comming from the server, this metod is called
  this.ws.onmessage = function(evt) {
    //   inc.innerHTML += evt.data + '<br/>';
    // checkFoundImage(evt.data);
    FingerScan(evt.data)
  }

  // when the connection is established, this method is called
  this.ws.onopen = function() {
    // inc.innerHTML += '.. connection open<br/>';
    ShowStatusDevice('ShowStatus', 'CSO Scanner Application open.')
  }

  // when the connection is closed, this method is called
  this.ws.onclose = function() {
    // inc.innerHTML += '.. connection closed<br/>';
    ShowStatusDevice(
      'ShowStatus',
      'SocketClose. Please open CSO Scanner Application.'
    )
  }

  function FingerScan(message) {
    //= ============= [START] Scope Receive data ======================================
    if (window.fingerprint.lastCmd === window.SeqRequestClient.ReceiveData) {
      SetSCanFileName('scanName', message)
      ShowStatusDevice('ShowStatus', 'File Name :' + message)
      MessageDialog('File Name :' + message)
      window.fingerprint.lastCmd = 0
    } else if (window.fingerprint.lastCmd === window.SeqRequestClient.Error) {
      MessageDialog('Error : ' + message)
      window.fingerprint.lastCmd = 0
    }

    //= ============= [END] Scope Receive data ======================================

    //= ============= [Start] Scope Receive Device/Sequence Status ==================================
    if (message.length <= window.DeviceStatus.Maximumdigit) {
      const cmd = parseInt(message, 10) // of 10 so you get a decimal number even with a leading 0
      if (cmd === window.DeviceStatus.UnconnectedDevice) {
        MessageDialog('Unconnected Application Scanner')
        window.fingerprint.DeviceStatus = cmd
        ShowStatusDevice('ShowStatus', 'Unconnected Application Scanner')
      } else if (cmd === window.DeviceStatus.ConnectedDevice) {
        MessageDialog('Application Scanner Connected')
        window.fingerprint.DeviceStatus = cmd
        ShowStatusDevice('ShowStatus', 'Application Scanner Connected')
      }
      window.fingerprint.lastCmd = cmd
    }
    //= ============= [End] Scope Receive Device/Sequence Status ==================================
  }

  function ShowStatusDevice(spanId, text) {
    if (deviceScanobj.SetOnChangeDeviceStatus !== undefined) {
      deviceScanobj.SetOnChangeDeviceStatus(spanId, text)
    }
  }
  function SetSCanFileName(spanId, text) {
    if (deviceScanobj.SetOnSCanFileName !== undefined) {
      deviceScanobj.SetOnSCanFileName(spanId, text)
    }
  }

  function MessageDialog(message) {
    window.console.log(message)
  }
}

DeviceScan.prototype.OpenScanner = function() {
  this.ws.send(window.SeqRequestClient.onOpenScanner)
}

DeviceScan.prototype.SetOnChangeDeviceStatus = function(spanId, text) {
  window.document.getElementById(spanId).innerHTML = text
}
DeviceScan.prototype.SetOnSCanFileName = function(spanId, text) {
  window.document.getElementById(spanId).value = text
}
