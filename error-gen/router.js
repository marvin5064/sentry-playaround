const Router = function(app) {
  app.get('/info/:message', (req, res) => {
    res.send(`Info: ${req.params.message}`);
  });
  app.get('/error/:message', (req, res) => {
    throw new Error(req.params.message);
  });
};
module.exports = Router;
