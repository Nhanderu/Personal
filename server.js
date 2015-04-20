// Imports the necessary modules.
var express = require("express");
var handlebars = require("express-handlebars");

// References the routers.
var routes = {
    index: require("./routes/index")
};

// Initializes a new Express application.
var app = express();

// Express settings.
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || "8080");
app.set("ip address", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set("views", __dirname + "/views");
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

// Gets the portuguese contents of the page.
var contents = JSON.parse(require('fs').readFileSync("./public/contents/pt.json"));

// Sets the index router.
app.use("/", router.index);

// Sets the routes of the static files.
app.use("/public", express.static(__dirname + "/public"));

// Fly, app! Fly!
app.listen(app.get("port"), app.get("ip address"), function () {
    console.log("Working @ " + app.get("ip address") + ":" + app.get("port") + "!");
});

module.exports = app;