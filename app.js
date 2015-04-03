var express = require("express");
var handlebars = require("express-handlebars");
var router = require("./routes/index");
var app = express();

// Express settings.
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || "8080");
app.set("ip address", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

var contents = JSON.parse(require('fs').readFileSync("./public/contents/pt.json"));

// Root page.
app.use("/", router);

app.listen(app.get("port"), function () {
    console.log("Working @ " + app.get("ip address") + ":" + app.get("port") + "!");
});

module.exports = app;