// Imports the necessary modules.
var fs = require('fs');

// Initializes a new Router intance and references the content files.
var router = require('express').Router();
var contents = {
    pt: JSON.parse(fs.readFileSync("./public/contents/pt.json")),
    en: JSON.parse(fs.readFileSync("./public/contents/en.json"))
};

// Root page.
// Verifies the languages of the client's browser and iterates through them.
// If it's portuguese, redirects to /pt. If it's english, redirects to /en.
// If it isn't any of them, continue the iteration until it reaches one of the two languages or the end of the array (then redirects to /en).
// By default, redirects to /en. 
router.get("/", function (request, response) {    
    var languages = request.headers["accept-language"].split(",");
    
    for (var index = 0; index < languages.length; index++) {
        var item = languages[index];
        
        if (/pt.*/i.test(item)) {
            response.redirect("/pt");
            break;
        }
        else if (/en.*/i.test(item)) {
            response.redirect("/en");
            break;
        }
        else if (index == languages.length - 1)
            response.redirect("/en");
    }
});

// Portuguese version.
router.get("/pt", function (request, response) {
    response.render("index", contents.pt);
});

router.get(/(^\/pt-..$|^\/por(t(u(g(u(e(se?)?)?)?)?)?)?$)/i, function (request, response) {
    response.redirect("/pt");
});

router.use("/pt/:error", function (request, response) {
    response.redirect("/pt");    
});

// English version.
router.get("/en", function (request, response) {
    response.render("index", contents.en);
});

router.get(/(^\/en-..$|^\/eng(l(i(sh?)?)?)?$)/i, function (request, response) {
    response.redirect("/en");
});

router.use("/en/:error", function (request, response) {
    response.redirect("/en");    
});

module.exports = router;