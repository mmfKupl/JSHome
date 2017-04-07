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
	var i = Math.round(Math.random()*goodspng.length);
	var j = Math.round(Math.random()*Name.length);
	var k = Math.round(Math.random()*City.length);
	var tr = document.createElement("tr");
	tbl.appendChild(tr);
	var td = document. createElement("td");
	tr.appendChild(td);
	tr.innerHTML = "<img height=\"50\" width=\"150\" src=\"" + goodspng[i-1] + "\"</img>" + "<p>" + Name[j-1] + " tolko shto kupil " + goods[i-1] + " iz goroda: " + City[k-1] + "</p>";
	
},3000);