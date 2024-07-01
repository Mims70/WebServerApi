const express = require('express');
const app = express();
const helloRoute = require('./routes/hello');

app.use('/api', helloRoute);

module.exports = app;
