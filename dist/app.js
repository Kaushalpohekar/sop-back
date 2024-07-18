"use strict";

var express = require('express');
var cors = require('cors');
var router = require('./routes');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(cors());
app.use(express.json({
  limit: '100mb'
}));
app.use(express.urlencoded({
  limit: '100mb',
  extended: true
}));
app.use(router);
var port = 4000;
app.listen(port, '0.0.0.0', function () {
  console.log("Server is running on http://0.0.0.0:".concat(port));
});