var div = document.getElementById('f');
var contmenu = document.getElementById('s');


div.onclick = function(){ div.style.display = "none"; };
contmenu.onclick = function(e) { e.stopPropagation(); };

document.oncontextmenu = function(e) {
	e.preventDefault();
	contmenu.style.top = e.clientY + 'px';
	contmenu.style.left = e.clientX + 'px';
	div.style.display = "block";
};

var a = contmenu.getElementsByTagName('a');
for(var i = 0; i < a.length; i++){
	a[i].addEventListener('click', function(e){
		e.preventDefault();
		alert(this.innerText);
	});
}