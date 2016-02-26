(function() {
	if(window.innerWidth > 800) {
		
		// Creates new script tags.
		var scriptBitcoinTooltip = document.createElement('script');
		var scriptHeaderBackground = document.createElement('script');
		
		// Sets the attributes of the tags.
		scriptBitcoinTooltip.type = scriptHeaderBackground.type = "text/javascript";
		scriptBitcoinTooltip.src = "/public/scripts/bitcoin-tooltip.js";
		scriptHeaderBackground.src = "/public/scripts/header-background.js";
		
		// Inserts the tags in the document, right after the script "caller".
		var scriptCaller = document.getElementsByTagName('script')[0];
		scriptCaller.parentNode.insertBefore(scriptBitcoinTooltip, scriptCaller.nextSibling);
		scriptCaller.parentNode.insertBefore(scriptHeaderBackground, scriptCaller.nextSibling);

	}
})();
