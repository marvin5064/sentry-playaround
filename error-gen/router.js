const Sentry = require('@sentry/node');
const CLogger = require('./customized_logger.js');

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
    const allowedLogLevel = ['debug', 'info', 'warning', 'error', 'fatal'];
    if (allowedLogLevel.indexOf(req.params.level) < 0) {
      res.send(`${req.params.level} level is not supported`);
      return;
    }

    const msg = `capture-message with level ${req.params.level}`;
    Sentry.withScope(scope => {
      scope.setLevel(req.params.level);
      Sentry.captureMessage(msg);
    });
    console.log(msg);

    res.send(msg);
  });
  app.get('/customized-logger/:level', (req, res) => {
    const msg = `customized-logger with level ${req.params.level}`;
    switch (req.params.level) {
      case 'debug':
        CLogger.debug(msg);
        break;
      case 'info':
        CLogger.info(msg);
        break;
      case 'warning':
        CLogger.warning(msg);
        break;
      case 'error':
        CLogger.error(msg);
        break;
      case 'fatal':
        CLogger.fatal(msg);
        break;
      default:
        res.send(`${req.params.level} level is not supported`);
        return;
    }
    res.send(msg);
  });
  app.get('/error/:message', (req, res) => {
    throw new Error(req.params.message);
  });
};
module.exports = Router;
