import _WebSocket from './WebSocket'
export default {
  WebSocket:_WebSocket
}
if(global)
global.WebSocket = _WebSocket