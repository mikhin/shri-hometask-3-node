import express from 'express';

import getSettingsModel from '../../models/getSettingsModel';
import postSettingsModel from '../../models/postSettingsModel';
import deleteSettingsModel from '../../models/deleteSettingsModel';

const router = express.Router();

router.get('/', (req, res) => {
  getSettingsModel(req, res);
});

router.post('/', (req, res) => {
  postSettingsModel(req, res);
});

router.delete('/', (req, res) => {
  deleteSettingsModel(req, res);
});

export default router;
