require("dotenv").config();
var express = require("express");
var app = express();
app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000", "http://trainer-api-oliver.onrender.com", "https://trainer-api-oliver.onrender.com", "https://trainer-api-oliver.onrender.com/"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
var router = require("./router");
var { testConnection } = require("./config/database");
var formidable = require("express-formidable");
var cors = require("cors");

testConnection();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://trainer-api-oliver.onrender.com", "https://trainer-api-oliver.onrender.com", "https://trainer-api-oliver.onrender.com/"],
    credentials: true,
  })
);
app.use(formidable());
app.use(router);

module.exports = app;
