const router = require('express').Router();
const git = require('simple-git/promise');
const axiosRequest = require('../../modules/axios-request');

router.get('/', (req, res) => {
  axiosRequest.get('conf')
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
});

router.post('/', (req, res) => git()
  .silent(true)
  .clone(`https://github.com/${req.body.repoName}.git`, `./src/uploads/repos/${req.body.repoName.replace('/', '-')}`)
  .then(() => axiosRequest.post('conf', req.body))
  .then(() => res.send(req.body))
  .catch((error) => {
    res.status(500);
    return res.send(error.toString());
  }));

module.exports = router;
