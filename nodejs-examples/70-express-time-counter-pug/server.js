const path = require('path');
const express = require('express');

const app = express();

let counter = 0;

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/hello', (req, res) => res.json({ message: 'hello' }));
app.get('/bye', (req, res) => res.json({ message: 'bye' }));

app.get('/counter', (req, res) => {
  counter += 1;

  res.render('counter', { counter });
});

app.get('/time', (req, res) => res.render('time', {
  time: new Date().toLocaleTimeString(),
}));

app.listen(3000);
