(function (){
	
	var photos = [
		{
			author: "Alex G. Ramos",
			url: "//pixabay.com/pt/centro-s%C3%A3o-paulo-noite-271294/",
			position: "50% 90%"
		},
		{
			author: "Alex G. Ramos",
			url: "//pixabay.com/pt/centro-s%C3%A3o-paulo-viadutos-271296/",
			position: "50% 90%"
		},
		{
			author: "\"maicou3834\"",
			url: "//pixabay.com/pt/cidade-s%C3%A3o-paulo-verde-natureza-744039/",
			position: "50% 350%"
		},
		{
			author: "\"Fox5\"",
			url: "//pixabay.com/pt/cidade-de-santos-santos---s%C3%A3o-paulo-671901/",
			position: "50% 250%"
		},
		{
			author: "\"skeeze\"",
			url: "//pixabay.com/pt/cityscape-noite-luzes-561269/",
			position: "50% 200%"
		},
		{
			author: "\"skeeze\"",
			url: "//pixabay.com/pt/teatro-municipal-de-s%C3%A3o-paulo-brasil-532633/",
			position: "50% 130%"
		},
		{
			author: "Fabricio Pereira",
			url: "//pixabay.com/pt/s%C3%A3o-paulo-metr%C3%B3pole-cidades-324913/",
			position: "50% 70%"
		},
		{
			author: "\"skeeze\"",
			url: "//pixabay.com/pt/linha-do-horizonte-cidade-urbanas-561272/",
			position: "50% 200%"
		},
		{
			author: "Vivian Vivian",
			url: "//pixabay.com/pt/ipiranga-museu-s%C3%A3o-paulo-684904/",
			position: "50% 100%"
		}
	];
	
	var selectedPhotoNumber = Math.ceil(Math.random() * photos.length);
	var selectedPhoto = photos[selectedPhotoNumber - 1];
	
	document.getElementById("header-image").style.backgroundImage = "url(\"/public/images/background/0" + selectedPhotoNumber + ".jpg\")";
	document.getElementById("header-image").style.backgroundPosition = selectedPhoto.position;
	
	document.getElementById("header-attribution-link").setAttribute("href", selectedPhoto.url);
	 
	document.getElementById("header-author").innerText = selectedPhoto.author; 
	
})();