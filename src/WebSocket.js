/**
 *  https://www.w3.org/TR/2011/WD-websockets-20110419/
 */
const EventTarget = require('event-target');
const URL = require('url');
class WebSocket {
  constructor(url) {
    if (url == null) {
      throw new TypeError('1 argument needed')
    }
    try {
      var parsed = URL.parse(url);
      if (parsed.protocol != 'wss:') {
        throw new Error('protocol must be wss')
      }
    }
    catch (e) {
      throw new SyntaxError('url in wrong format,protocol must be wss')
    }
    //根据微信小程序API介绍 websocket是单例的
    if (WebSocket.instance != null) {
      WebSocket.instance.close()//安全的关闭
    }
    WebSocket.instance = this
    this.url = url
    this.readyState = 0
    this.onopen = null;
    this.onclose = null;
    this.onerror = null;
    this.onmessage = null;
    wx.connectSocket({
      url: url,//API介绍比较模糊
    })
    wx.onSocketOpen(() => {
      this.readyState = WebSocket.OPEN
      if (this.onopen) {
        this.onopen.call(this)
      }
      this.dispatchEvent({ 'type': 'open' })
    })
    wx.onSocketError((e) => {
      var event = { 'type': 'error', 'data': e }
      if (this.onerror) {
        this.onerror.call(this, event)
      }
      this.dispatchEvent(event)
    })
    wx.onSocketMessage((data) => {

      if (this.readyState !== WebSocket.OPEN && this.readyState !== WebSocket.CLOSING) {
        return
      }
      /* webmessage https://www.w3.org/TR/2010/WD-webmessaging-20101118/  */
      var event = { 'type': 'message', 'data': data.data }//TODO origin ...
      if (this.onmessage) {
        this.onmessage.call(this, event)
      }
      this.dispatchEvent(event)
    })
    wx.onSocketClose(() => {
      this.readyState = WebSocket.CLOSED
      if (this.onclose) {
        var event = { 'type': 'close', 'wasClean': true, code: 0, reason: '' }
        this.onclose.call(this, event)
      }
    })
  }
  close() {
    wx.closeSocket()
  }
  send(data) {
    wx.sendSocketMessage({ data: data })
  }
}
WebSocket.prototype.addEventListener = EventTarget.addEventListener
WebSocket.prototype.removeEventListener = EventTarget.removeEventListener
WebSocket.prototype.dispatchEvent = EventTarget.dispatchEvent

WebSocket.CONNECTING = 0;
WebSocket.OPEN = 1;
WebSocket.CLOSING = 2;
WebSocket.CLOSED = 3;
WebSocket.instance = null;
module.exports = WebSocket