require("dotenv").config();
var express = require("express");
var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var router = require("./router");
var { testConnection } = require("./config/database");
var formidable = require("express-formidable");
testConnection();
app.use(formidable());
app.use(router);

module.exports = app;
