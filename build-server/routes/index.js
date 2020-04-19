const router = require('express').Router();

const registerAgent = require('../models/register-agent');
const saveBuildResult = require('../models/save-build-result');

router.post('/notify-agent', (req, res) => {
  registerAgent(req, res);
});

router.post('/notify-build-result', (req, res) => {
  saveBuildResult(req, res);
});

module.exports = router;
