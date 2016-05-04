document.getElementById('bitcoin-activator').addEventListener('click', function (e) {
	var btc = document.getElementById('bitcoin-box');
	
	if (btc.style.opacity == '1')
		btc.style.opacity = '0';
	else
		btc.style.opacity = '1';
}, false);