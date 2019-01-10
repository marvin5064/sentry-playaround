const express = require('express');
const Router = require('./router');

//create app using express
const app = express();
const port = 3000;

//Router
Router(app);

//Listen server to the specific PORT
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
