import WebSocket from './WebSocket'
export default {
  WebSocket
}
window = !!window ? window : {}
window.WebSocket = WebSocket