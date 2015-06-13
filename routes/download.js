// Imports the necessary modules.
var path = require("path");

// Initializes a new router.
var router = require('express').Router();

// Pre-release version.
router.get("/curriculum", function (request, response) {
	var file = path.join(__dirname, "..", "public", "documents", "curriculum", "English.pdf");
    
	response.download(file, "RafaelEscobar.pdf", function(error) {
        if (error) {
            console.log(error);
            response.status(error.status).end();
        }
    });
});

module.exports = router;