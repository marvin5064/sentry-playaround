const Sentry = require('@sentry/node');

const CLogger = {
  debug: function(msg) {
    // Sentry.withScope(scope => {
    //   scope.setLevel('debug');
    //   Sentry.captureMessage(msg);
    // });
    console.log(msg);
  },
  info: function(msg) {
    // Sentry.withScope(scope => {
    //   scope.setLevel('info');
    //   Sentry.captureMessage(msg);
    // });
    console.log(msg);
  },
  warning: function(msg) {
    Sentry.withScope(scope => {
      scope.setLevel('warning');
      Sentry.captureMessage(msg);
    });
    console.log(msg);
  },
  error: function(msg) {
    Sentry.withScope(scope => {
      scope.setLevel('error');
      Sentry.captureMessage(msg);
    });
    console.log(msg);
  },
  fatal: function(msg) {
    Sentry.withScope(scope => {
      scope.setLevel('fatal');
      Sentry.captureMessage(msg);
    });
    console.log(msg);
  }
};

module.exports = CLogger;
