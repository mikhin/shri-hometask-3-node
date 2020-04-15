const router = require('express').Router();

const getSettingsModel = require('../../models/getSettingsModel');
const postSettingsModel = require('../../models/postSettingsModel');
const deleteSettingsModel = require('../../models/deleteSettingsModel');

router.get('/', (req, res) => {
  getSettingsModel(req, res);
});

router.post('/', (req, res) => {
  postSettingsModel(req, res);
});

router.delete('/', (req, res) => {
  deleteSettingsModel(req, res);
});

module.exports = router;
