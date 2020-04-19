const router = require('express').Router();

const startNewBuild = require('../models/start-new-build');
const sendOwnState = require('../models/send-own-state');

router.post('/build', async (req, res) => {
  await startNewBuild(req, res);
});

router.get('/state', (req, res) => {
  sendOwnState(req, res);
});

module.exports = router;
