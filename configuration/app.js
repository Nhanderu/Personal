// Imports the necessary modules.
var express = require("express");
var nunjucks = require("nunjucks");
var path = require("path");
var router = require("../routes/index");

// Initializes a new Express application.
var app = express();

// Express settings.
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || "8080");
app.set("ip address", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "html");

// Nunjucks settings.
nunjucks.configure("views", { autoescape: true, express: app });

// Sets the router.
app.use("/", router);

// Sets the routes of the static files.
var staticFiles = express.static(path.join(__dirname, "..", "assets"));
app.use("/public", staticFiles);

module.exports = app;
