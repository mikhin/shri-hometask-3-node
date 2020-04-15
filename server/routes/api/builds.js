const router = require('express').Router();
const cache = require('../../modules/cache');

const postCommitBuildModel = require('../../models/postCommitBuildModel');
const getBuildsModel = require('../../models/getBuildsModel');
const getBuildInfoModel = require('../../models/getBuildInfoModel');
const getBuildLogModel = require('../../models/getBuildLogModel');

router.get('/', (req, res) => {
  getBuildsModel(req, res);
});

router.post('/:commitHash', (req, res) => {
  postCommitBuildModel(req, res);
});

router.get('/:buildId', (req, res) => {
  getBuildInfoModel(req, res);
});

router.get('/:buildId/logs', cache(10), (req, res) => {
  getBuildLogModel(req, res);
});

module.exports = router;
