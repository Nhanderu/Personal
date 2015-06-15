// Imports the necessary modules.
var fs = require('fs');

// References the content files.
var contents = JSON.parse(fs.readFileSync("./public/contents/english.json"));
contents.year = new Date().getFullYear();

module.exports = {
	// The english page function.
	index: function (request, response) {
	    response.render("index", contents);
	},
	
	// The redirector function.
	redirect: function (request, response) {
		response.redirect("/en");
	}
};