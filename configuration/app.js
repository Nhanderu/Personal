// Imports the necessary modules.
var express = require("express");
var handlebars = require("express-handlebars");
var path = require("path");

// Initializes a new Express application.
var app = express();

// Express settings.
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || "8080");
app.set("ip address", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set("views", path.join(__dirname, "..", "views"));
app.engine("hbs", handlebars());
app.set("view engine", "hbs");

// Sets the router.
app.use("/", require("../routes/default"));

// Sets the routes of the static files.
var staticFiles = express.static(path.join(__dirname, "..", "public"));
app.use("/public", staticFiles);

module.exports = app;