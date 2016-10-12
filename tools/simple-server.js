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

var WebSocketServer = require('ws').Server, wss = new WebSocketServer({ server: app });

wss.on('connection', function connection(ws) {
    console.log('connected')
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send('111111');
    });

    ws.send('something');
});
