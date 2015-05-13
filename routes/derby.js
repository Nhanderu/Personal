// Imports the necessary modules.
var fs = require('fs');

// Initializes a new Router intance and references the content files.
var router = require('express').Router();

// Root page.
router.get("/", function (request, response) {
    response.render("derby");
});

router.use("/:error", function (request, response) {
    response.redirect("/");
});

module.exports = router;