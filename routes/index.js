var router = require('express').Router();
var contents = JSON.parse(require('fs').readFileSync("./public/contents/pt.json"));

// Root page.
router.get("/", function (request, response) {
    response.render("index", contents);
});

// English version.
router.get("/en", function (request, response) {
    response.send("P�gina em ingl�s!");
});

router.get(/^\/en-..$|^\/eng$|^\/english$/g, function (request, response) {
    response.redirect("/en");
});

// Any other page redirects to index.
router.get("/:error", function (request, response) {
    response.redirect("/");
});

module.exports = router;
