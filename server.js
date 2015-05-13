// Imports the necessary modules.
var express = require("express");
var handlebars = require("express-handlebars");

// References the routers.
var routers = {
    index: require("./routes/index"),
    derby: require("./routes/derby")
};

// Initializes a new Express application.
var app = express();

// Express settings.
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || "8080");
app.set("ip address", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set("views", __dirname + "/views");
app.engine("hbs", handlebars());
app.set("view engine", "hbs");

// Sets the routers.
app.use("/", routers.index); // Index.
app.use("/derby", routers.derby); // Derby.

// Sets the routes of the static files.
app.use("/public", express.static(__dirname + "/public"));

// Any other page redirects to index.
app.get("/:error", function (request, response) {
    response.sendStatus(404);
});

// Fly, app! Fly!
app.listen(app.get("port"), app.get("ip address"), function () {
    console.log("Working @ " + app.get("ip address") + ":" + app.get("port") + "!");
});

module.exports = app;