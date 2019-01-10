const Sentry = require('@sentry/node');

const Router = function(app) {
  app.get('/info/:message', (req, res) => {
    res.send(`Info: ${req.params.message}`);
  });
  app.get('/capture-error/:message', (req, res) => {
    Sentry.captureException('capture-error: ${req.params.message}');
    res.send(`capture-error: ${req.params.message}`);
  });
  app.get('/capture-message/:level', (req, res) => {
    // Available Logging Levels:
    // fatal
    // error
    // warning
    // info
    // debug
    const msg = `capture-message with level ${req.params.level}`;
    Sentry.withScope(scope => {
      scope.setLevel(req.params.level);
      Sentry.captureMessage(msg);
    });
    console.log(msg);
    res.send(msg);
  });
  app.get('/error/:message', (req, res) => {
    throw new Error(req.params.message);
  });
};
module.exports = Router;
