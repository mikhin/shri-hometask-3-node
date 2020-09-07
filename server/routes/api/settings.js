const router = require('express').Router();
const git = require('simple-git/promise');
const axiosRequest = require('../../modules/axios-request');

router.get('/', (req, res) => {
  axiosRequest.get('conf')
    .then((response) => {
      const settings = response.data.data;
      if (!settings) {
        return res.send({});
      }
      const period = settings.period.toString();
      return res.send({ ...settings, period });
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/', (req, res) => git()
  .silent(true)
  .clone(`https://github.com/${req.body.repoName}.git`, `./server/uploads/repos/${req.body.repoName.replace('/', '-')}`)
  .then(() => {
    const {
      repoName,
      buildCommand,
      mainBranch = '',
      period = '',
    } = req.body;

    axiosRequest.post('conf', {
      repoName, buildCommand, mainBranch, period,
    });
  })
  .then(() => res.send(req.body))
  .catch((error) => {
    const gitAlreadyErrorMessage = 'already exists and is not an empty directory';
    if (error.message.includes(gitAlreadyErrorMessage)) {
      const {
        repoName,
        buildCommand,
        mainBranch = '',
        period = '',
      } = req.body;

      axiosRequest.post('conf', {
        repoName, buildCommand, mainBranch, period,
      });
      return res.send(req.body);
    }
    return res.status(500).send(error.toString());
  }));

router.delete('/', (req, res) => {
  axiosRequest.delete('conf')
    .then(() => res.send(req.body))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

module.exports = router;
