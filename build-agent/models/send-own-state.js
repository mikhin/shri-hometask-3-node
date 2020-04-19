module.exports = async (request, response) => {
  const state = request.app.get('state');

  return response.send({
    status: 'ok',
    result: {
      state,
    },
  });
};
