// /notify-build-result — сохранить результаты сборки.
// В параметрах — id сборки, статус, лог (stdout и stderr процесса).

const requestDatabase = require('../modules/request-database');

module.exports = async (request, response) => {
  const { body: { buildId, isSuccess, log } } = request;

  console.log('Build result notified.');

  if (!buildId || !isSuccess || !log) {
    return response.send({
      status: 'requiredFieldsAreMissing',
    });
  }

  try {
    await requestDatabase.post('build/finish', {
      buildId,
      duration: 15,
      success: isSuccess,
      buildLog: log,
    });
  } catch (e) {
    console.log('Saving build result error.');
  }

  return response.send({
    status: 'buildResultSaved',
  });
};
