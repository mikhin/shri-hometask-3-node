const http = require('http');
const fs = require('fs');
const path = require('path');

const hello = require('./hello.json');
const bye = require('./bye.json');

http
  .createServer((req, res) => {
    if (req.url === '/hello') {
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(hello));
    } if (req.url === '/bye') {
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(bye));
    }

    if (req.url === '/') {
      return fs.readFile(
        path.resolve(__dirname, './index.html'),
        (err, htmlString) => {
          if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Not found' }));
          }

          return res.end(htmlString);
        },
      );
    }

    if (req.url === '/styles.css') {
      return fs.readFile(
        path.resolve(__dirname, './styles.css'),
        (err, stylesString) => {
          if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Not found' }));
          }

          return res.end(stylesString);
        },
      );
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    return res.end(JSON.stringify({ error: 'Not found' }));
  })
  .listen(3000);
