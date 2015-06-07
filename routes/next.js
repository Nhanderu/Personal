var router = require('express').Router();

router.get("/", function (request, response) {
	response.render("next");
});

module.exports = router;