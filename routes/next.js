// Initializes a new router.
var router = require('express').Router();

// Pre-release version.
router.get("/", function (request, response) {
  response.render("next");
});

module.exports = router;
