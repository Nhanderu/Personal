// Gets the configurated Express app.
var app = require("./configuration/app");

// Fly, app! Fly!
app.listen(app.get("port"), app.get("ip address"), function () {
    console.log("Working @ " + app.get("ip address") + ":" + app.get("port") + "!");
});

module.exports = app;