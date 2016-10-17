var ws_cfg = {
    ssl: true,
    port: 8080,
    key: 'key.pem',
    cert: 'cert.pem'
};
var fs = require('fs')
var processRequest = function (req, res) {
    console.log("Request received.")
};
var httpServ = require('https');
var app = null;

app = httpServ.createServer({
    key: fs.readFileSync(ws_cfg.key),
    cert: fs.readFileSync(ws_cfg.cert)
}, processRequest).listen(ws_cfg.port);

//var WebSocketServer = require('ws').Server, ws_server = new WebSocketServer(ws_cfg);

var engine = require('engine.io')
var server = engine.attach(app)

server.on('connection', function (socket) {
  socket.on('message', function(data){
    console.log(data)
    socket.send('hello')
 });
  socket.on('close', function(){ });
});

