var contmenu = document.getElementById('s');
var div = document.getElementById('f');

div.addEventListener('click', function(){ div.style.display = "none"; });
contmenu.addEventListener('click', function(e){ e.stopPropagation(); });

document.addEventListener('contextmenu', function(e){
	e.preventDefault();
	contmenu.style.top = e.clientY + 'px';
	contmenu.style.left = e.clientX + 'px';
	div.style.display = "block";
});

var a = contmenu.getElementsByTagName('a');
for(var i = 0; i < a.length; i++){
	a[i].addEventListener('click', function(e){
		e.preventDefault();
		alert(this.innerText);
	});
}