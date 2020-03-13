const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  const interval = setInterval(() => ws.send(getRPS()), 1000);

  ws.onclose = () => clearInterval(interval);
});

fs.readFile(path.resolve(__dirname, './static/index.html'), (err, html) => {
  http.createServer((request, response) => response.end(html)).listen(3000);
});

function getRPS() {
  return Math.round(Math.random() * 1000);
}

// Make your own websocket server
// https://hackernoon.com/implementing-a-websocket-server-with-node-js-d9b78ec5ffa8
