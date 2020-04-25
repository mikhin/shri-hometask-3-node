import express from 'express';

import postCommitBuildModel from '../../models/postCommitBuildModel';
import getBuildsModel from '../../models/getBuildsModel';
import getBuildInfoModel from '../../models/getBuildInfoModel';
import getBuildLogModel from '../../models/getBuildLogModel';

const router = express.Router();

router.get('/', (req, res) => {
  getBuildsModel(req, res);
});

router.post('/:commitHash', (req, res) => {
  postCommitBuildModel(req, res);
});

router.get('/:buildId', (req, res) => {
  getBuildInfoModel(req, res);
});

router.get('/:buildId/logs', (req, res) => {
  getBuildLogModel(req, res);
});

export default router;
