const router = require('express').Router();
const git = require('simple-git/promise')();
const axiosRequest = require('../../modules/axios-request');
const cache = require('../../modules/cache');

router.get('/', (req, res) => {
  axiosRequest.get('build/list')
    .then((response) => {
      const builds = response.data.data;
      res.send([...builds]);
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/:commitHash', (req, res) => {
  // Далее идет плохая модель. Очень плохая модель. Так нельзя.
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
      .cwd(`./server/uploads/repos/${repoName.replace('/', '-')}`)
      .then(() => git.show([`${commitHash}`, '--pretty=format:%an%n%s', '--quiet'])))
    .then((response) => {
      [authorName, commitMessage] = response.split('\n');

      axiosRequest.post('build/request', {
        commitMessage,
        commitHash,
        branchName,
        authorName,
      })
        .then((axiosResponse) => {
          const build = axiosResponse.data.data;
          setTimeout(() => {
            axiosRequest.post('build/start', {
              buildId: build.id,
              dateTime: '2020-03-14T16:24:58.213Z',
            });
          }, 3000);
          setTimeout(() => {
            axiosRequest.post('build/finish', {
              buildId: build.id,
              duration: 15,
              success: true,
              buildLog: 'LOL LOG',
            });
          }, 6000);
          return res.send({ ...build });
        });
    })
    .catch((error) => {
      if (error.message.includes('fatal: bad object')
        || error.message.includes('ambiguous argument')) {
        res.status(500);
        return res.send({ message: 'Commit does not exist' });
      }
      res.status(500);
      return res.send(error.toString());
    });
});

router.get('/:buildId', (req, res) => {
  const { buildId } = req.params;

  axiosRequest.get(`build/details?buildId=${buildId}`)
    .then((response) => {
      const build = response.data.data;
      res.send({ ...build });
    })
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
    duration: 15,
    success: true,
    buildLog: 'LOL LOG',
  })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

module.exports = router;
