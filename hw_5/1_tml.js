var tbl = document.createElement('table');
tbl.setAttribute("align", "center");
tbl.setAttribute("frame", "border");
tbl.setAttribute("rules", "all");
document.body.appendChild(tbl);

for(var j = 0; j < 10; j++){
	var tr = document.createElement("tr");
	tbl.appendChild(tr);
	for(var i = 0; i < 10; i++){
		var td = document.createElement("td");
		tr.appendChild(td);
		td.innerText = (i+1) + "x" + (j+1) + "=" + (i+1)*(j+1) + " ";
		if(j == i)
			td.setAttribute("bgColor", "gray");
	}
}