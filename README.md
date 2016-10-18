# WeApp-adapter
将微信小程序私有的api适配到标准w3c API来开发微信小程序
目标：

* 让开发者以习惯的标准化的 W3C API来开发微信小程序
* 让已有的库能够在微信小程序里面使用

# 使用方法
我们尽量与w3c标准兼容，所以可以像使用标准Websocket接口一样使用adapter

```js
var Websocket = require('weapp-adapter').WebSocket
var ws = new WebSocket('wss://<doman>:<port>')
ws.onopen = function(){}
ws.addEventListener('open',function(){})
ws.onmessage = function(e){}
ws.onclose = function(){}
ws.send('hello word')


```