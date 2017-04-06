var y = 1;
var i = setInterval(function(){
	window.scroll(0, Math.pow(y/10, 3));
	y++;
	if(window.scrollY + window.innerHeight >= 10000)
		clearInterval(i);
}, 5);