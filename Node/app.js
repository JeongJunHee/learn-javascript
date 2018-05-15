const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended : false}));

const colorRouter = require('./router/color_router');

app.use(colorRouter);

module.exports = app;