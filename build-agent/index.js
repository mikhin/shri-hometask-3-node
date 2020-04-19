const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const registerOnServer = require('./modules/register-on-server');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(config.port);

registerOnServer(app);

module.exports = app;
