const requestDatabase = require('./request-database');

const WAITING_STATUS_TITLE = 'Waiting';
const IN_PROGRESS_STATUS_TITLE = 'InProgress';

module.exports = async () => {
  let databaseResponse;

  try {
    ({ data: databaseResponse } = await requestDatabase.get('build/list'));
  } catch (error) {
    console.log('Getting builds error.');
  }

  const { data: buildList } = databaseResponse;

  return buildList.filter((build) => build.status === WAITING_STATUS_TITLE
  || build.status === IN_PROGRESS_STATUS_TITLE);
};
