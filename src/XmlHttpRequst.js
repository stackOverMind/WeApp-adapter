const EventTarget = require('event-target');
const URL = require('url');
class XMLHttpRequestEventTarget extends EventTarget {
    constructor() {
        super()
        this.onloadstart = null
        this.onprogress = null
        this.onabort = null
        this.onerror = null
        this.onload = null
        this.ontimeout = null
        this.onloadend = null
    }
}
const XMLHttpRequestResponseTypes = [
    "",
    "arraybuffer",
    "blob",
    "document",
    "json",
    "text"
]
class XmlHttpRequest extends XMLHttpRequestEventTarget {
    constructor() {
        super()
        this.onreadystatechange = null
        this._readystate = 0
    }
    get readystate() {
        return this._readystate
    }
    get status() {

    }
    get statusText() {

    }
    get response() {

    }
    get responseText() {

    }
    get responseXML() {

    }
    open() {

    }
    send() {

    }
    abort() {

    }
    getResponseHeader() {

    }
    getAllResponseHeaders() {

    }
    overrideMimeType() {

    }

}
XmlHttpRequest.UNSENT = 0;
XmlHttpRequest.OPENED = 1;
XmlHttpRequest.HEADERS_RECEIVED = 2;
XmlHttpRequest.LOADING = 3;
XmlHttpRequest.DONE = 4;