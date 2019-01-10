const Router = function(app) {
  app.get('/', (req, res) => {
    res.send('Hello world!');
  });
};
module.exports = Router;
