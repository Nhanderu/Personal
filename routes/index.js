// Imports the necessary modules.
var fs = require('fs');

// Initializes a new Router intance and references the content files.
var router = require('express').Router();
var contents = {
    pt: JSON.parse(fs.readFileSync("./public/contents/pt.json")),
    en: JSON.parse(fs.readFileSync("./public/contents/en.json"))
};

// Root page.
router.get("/", function (request, response) {
    response.render("index", contents.pt);
});

// English version.
router.get("/en", function (request, response) {
    response.render("index", contents.en);
});

router.get(/^\/en-..$|^\/eng$|^\/english$/g, function (request, response) {
    response.redirect("/en");
});

module.exports = router;