// Imports the necessary modules.
var fs = require('fs');
var path = require('path');

function getContents(lang) {
	// Get file path.
	var filePath = path.join(__dirname, "..", "assets", "contents", lang + ".json");
	
	// Get the content object.
	var contents = JSON.parse(fs.readFileSync(filePath));
	contents.year = new Date().getFullYear();
	return contents;
}

function ptPage(request, response) {
	response.render("index.html", getContents("portuguese"));
}

function enPage(request, response) {
	response.render("index.html", getContents("english"));
}

module.exports = {
	// Verifies the languages of the client's browser and iterates through them.
	// If it's portuguese, redirects to /pt. If it's english, redirects to /en.
	// If it isn't any of them, continue the iteration until it reaches one of the two languages or the end of the array (then redirects to /en).
	// By default, redirects to /en. 
	index: function (request, response) {  
	    var languages = request.headers["accept-language"].split(",");
	    
	    for (var index = 0; index < languages.length; index++) {
	        var item = languages[index];
	        
	        if (/pt.*/i.test(item))
	            return ptPage(request, response);
	        if (/en.*/i.test(item) || index == languages.length - 1)
	            return enPage(request, response);
	    }
	},
	
	// Portuguese page.
	pt: ptPage,
	
	// English page.
	en: enPage,
	
	// The redirector function.
	redirect: function (route) {
		return function (request, response) {
			response.redirect(route);
		}
	}
};