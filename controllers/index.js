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
	            response.redirect("/pt");
	        if (/en.*/i.test(item) || index == languages.length - 1)
	            response.redirect("/en");
	    }
	},

	// The redirector function.
	redirect: function (request, response) {
		response.redirect("/");
	}
};