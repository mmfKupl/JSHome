var elm = 0, com = 0, txt = 0;

var searchDOM = function(element){
	console.log(element);
	if(element.nodeType == 1) elm++;
	else if(element.nodeType == 8) com++;
	else if(element.nodeType == 3) txt++;

	if(element.childNodes.length) for (var i = 0; i < element.childNodes.length; i++) searchDOM(element.childNodes[i]);
}

searchDOM(document);

console.log("Кол-во тегов: " + elm + "\nКол-во комментариев: " + com + "\nКол-во текстовых узлов: " + txt);
