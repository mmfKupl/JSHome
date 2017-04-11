var Name = ["Bob","Carlton","Gordon",
"Percy","Conrad","Quincey",
"Armand","Jamal","Andrew",
"Matthew","Mark","Gerald","Ivan", 
"Pavel", "George", "Vladimir", "Mary", 
"Yan", "Roman"];

var City = ["Minsk", "Mogilev", "Grogno", "Gomel", "Brest"
, "Vitebsk"];

var goods = ["car", "kolbosa", "stol", "stul", "telephone"];
var goodspng = ['png1/car.png', 'png1/kolb.png', 'png1/stol.png', 'png1/stul.png', 'png1/tlp.png'];

var SPAM = [];

for(var i = 0; i < goods.length; i++){
	SPAM[i] = {	
		name : goods[i],
		png : goodspng[i]
	}
}

var tbl = document.createElement("table");
document.body.appendChild(tbl);

var intr = setInterval(function(){
	var i = Math.floor(Math.random()*goodspng.length);
	var j = Math.floor(Math.random()*Name.length);
	var k = Math.floor(Math.random()*City.length);
	var tr = document.createElement("tr");
	tbl.appendChild(tr);
	var td = document. createElement("td");
	tr.appendChild(td);
	tr.innerHTML = "<img height=\"50\" width=\"150\" src=\"" + goodspng[i] + "\"</img>" + "<p>" + Name[j] + " tolko shto kupil " + goods[i] + " iz goroda: " + City[k] + "</p>";
	var td = document. createElement("td");
	tr.appendChild(td);
	var button = document.createElement('button');
	button.setAttribute('type', 'button');
	button.innerText = 'X';
	tr.appendChild(button);
	var fun = function(){
		this.parentNode.remove();
	}
	button.addEventListener("click", fun);	
},3000);
	