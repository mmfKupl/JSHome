var li = document.getElementsByTagName('li');

function re(el){
	var sibling = el.parentNode.children;
		for(var i = 0; i < sibling.length; i++){
			console.log(i+ "  ");
			if(sibling[i].classList.contains('active')){
				sibling[i].classList.remove('active');
				if(sibling[i].children.length)	for(var j = 0; j< sibling[i].children.length; j++ )	re(sibling[i].children[j]);					
			}
		}
}

for(var i = 0; i < li.length; i++){
	li[i].addEventListener('click', function(e){
		e.stopPropagation();
		if(this.classList.contains('active'))	re(this);
		else{
			re(this);
			this.classList.add('active');
			if(this.getElementsByTagName('ul').length)	this.getElementsByTagName('ul')[0].classList.add('active');
		}
	})
}
