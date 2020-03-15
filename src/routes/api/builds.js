const router = require('express').Router();
const git = require('simple-git/promise')();
const axiosRequest = require('../../modules/axios-request');
const cache = require('../../modules/cache');

router.get('/', (req, res) => {
  axiosRequest.get('build/list')
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/:commitHash', (req, res) => {
  let repoName;
  let commitMessage;
  let branchName;
  let authorName;

  const { commitHash } = req.params;

  axiosRequest.get('conf')
    .then((response) => {
      repoName = response.data.data.repoName;
      branchName = response.data.data.mainBranch;
    })
    .then(() => git
      .cwd(`./src/uploads/repos/${repoName.replace('/', '-')}`)
      .then(() => git.show([`${commitHash}`, '--pretty=format:%an%n%s', '--quiet'])))
    .then((response) => {
      [authorName, commitMessage] = response.split('\n');

      axiosRequest.post('build/request', {
        commitMessage,
        commitHash,
        branchName,
        authorName,
      })
        .then(() => {
          res.send({
            commitMessage,
            commitHash,
            branchName,
            authorName,
          });
        });
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.get('/:buildId', (req, res) => {
  const { buildId } = req.params;

  axiosRequest.get(`build/details?buildId=${buildId}`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.get('/:buildId/logs', cache(10), (req, res) => {
  const { buildId } = req.params;

  axiosRequest.get(`build/log?buildId=${buildId}`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/:buildId/start', (req, res) => {
  const { buildId } = req.params;

  axiosRequest.post('build/start', {
    buildId,
    dateTime: '2020-03-14T16:24:58.213Z',
  })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/:buildId/finish', (req, res) => {
  const { buildId } = req.params;

  axiosRequest.post('build/finish', {
    buildId,
    duration: 0,
    success: true,
    buildLog: 'Very interesting build log.',
  })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

module.exports = router;
