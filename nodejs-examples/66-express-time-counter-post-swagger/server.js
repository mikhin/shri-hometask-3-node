const express = require('express');
const swaggerUi = require('swagger-ui-express');

const app = express();

let counter = 0;

app.use(express.json());

const swaggerConfig = require('./swagger.json');

app.get('/hello', (req, res) => res.json({ message: 'hello' }));
app.get('/bye', (req, res) => res.json({ message: 'bye' }));

app.get('/counter', (req, res) => {
  counter += 1;

  res.end(String(counter));
});

app.post('/counter', (req, res) => {
  counter = req.body.value;

  res.end(String(counter));
});

app.get('/time', (req, res) => res.end(new Date().toLocaleTimeString()));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(3000);
