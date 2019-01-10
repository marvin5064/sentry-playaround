const express = require('express');
const Router = require('./router');
const Sentry = require('@sentry/node');

//create app using express
const app = express();
const port = 3000;
Sentry.init({
  dsn: 'https://f1656c66ddb34d51b79e9559bfb8c16b@sentry.io/1368692',
  environment: process.env.ENV || 'development'
});

app.use(Sentry.Handlers.requestHandler());
//Router
Router(app);
app.use(Sentry.Handlers.errorHandler());
//Listen server to the specific PORT
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
