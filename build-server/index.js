const express = require('express');
const bodyParser = require('body-parser');
const runQueue = require('./modules/run-queue');
const getSettings = require('./modules/get-settings');
const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.set('buildAgents', []);
app.set('builds', []);
app.set('settings', null);

getSettings(app);
setInterval(runQueue, 10000, app);

app.listen(config.port);

module.exports = app;
