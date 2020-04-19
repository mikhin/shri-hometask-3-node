const fs = require('fs');
const exec = require('await-exec');
const git = require('simple-git/promise');
const clearDirectory = require('./clear-directory');

const BUILDS_DIRECTORY_PATH = `${__dirname}/../builds`;

module.exports = async (buildId, repoName, command) => {
  await clearDirectory(BUILDS_DIRECTORY_PATH);
  fs.mkdirSync(BUILDS_DIRECTORY_PATH);

  console.log('Builds directory cleared.');

  const buildDirectory = `${BUILDS_DIRECTORY_PATH}/${buildId}`;

  if (!fs.existsSync(buildDirectory)) {
    fs.mkdirSync(buildDirectory);
  }

  console.log('Directory created.');

  await git()
    .clone(`https://github.com/${repoName}.git`, buildDirectory);

  console.log('Repository cloned.');

  let buildStdout;
  let buildStderr;
  let buildError;

  try {
    ({
      stdout: buildStdout,
      stderr: buildStderr,
    } = await exec(command, { cwd: buildDirectory }));
  } catch (error) {
    console.log('Build error.');
    buildError = error;
  }

  console.log('Build created.');

  return {
    buildStdout,
    buildStderr,
    buildError,
  };
};
