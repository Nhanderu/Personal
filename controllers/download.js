// Imports the necessary modules.
var path = require("path");

module.exports = {
    curriculum: function (language) {
        //Verifies the language.
        var file = "";
        if (language === "pt")
            file = path.join(__dirname, "..", "public", "documents", "Portuguese.pdf");
        else
            file = path.join(__dirname, "..", "public", "documents", "English.pdf");
        
        return function (request, response) {
        	response.download(file, "RafaelEscobar.pdf", function(error) {
                if (error) response.status(error.status).end();
            });
        };
    }
};