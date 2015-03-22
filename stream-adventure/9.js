var websocket = require('websocket-stream');
var ws = websocket('ws://localhost:8099');

ws.write('hello\n');

console.log(ws);
