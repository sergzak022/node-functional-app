const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');

let app = express();

app.use(bodyParser.json());

app.use(usersRouter);

module.exports = app;
