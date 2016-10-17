var _WebSocket = require('./WebSocket.js')
module.exports = {
  WebSocket:_WebSocket
}
if(navigator == null){
  navigator = {}
  navigator.userAgent = 'WeApp'
}


