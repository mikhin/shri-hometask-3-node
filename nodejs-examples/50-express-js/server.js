const path = require('path');
const express = require('express');

const app = express();

// Функции промежуточной обработки (middleware)

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/hello', (req, res) => res.json({ message: 'hello' }));
app.get('/bye', (req, res) => res.json({ message: 'bye' }));

app.listen(3000);
