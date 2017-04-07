//avs Население  8,46 млн  +43
//blr 9 505 200 +375
//est 1,325 миллиона +372
//fr 66,03 миллиона +33
//gb  64,1 миллиона +44
//gr 80,62 миллиона  +49
//krg  5,72 миллиона +996
//kz 17,04 миллиона +7
//pl 38,53 миллиона +48
//rf 143,5 миллиона +7
//ukr 45,49 миллиона +380
//usa 318,9 миллиона +1 
//uzb 30,24 миллиона +998

var cnt = ['Avstria', 'Belarus', 'Estonia', 'France', 'GreatBritan', 'Germani', 
'Kirgizia', 'Kazahstan', 'Polend', 'Russia', 'Ukrain', 'USA', 'Uzbekistan'];
var tC = ['+43', '+375', '+372', '+33', '+44', '+49', '+996', '+7', '+48', '+7', '+380', '+1', '+998'];
var ppn = ['8.46 mln', '9.5 mln', '1.3 mln', '66 mln', '64 mln', '80.6 mln', '5.7 mln', 
'17 mln', '38 mln', '143.5 mln', '45.5 mln', '319 mln', '30.2 mln'];
var fg = ['png/avs.png', 'png/blr.png', 'png/est.png', 'png/fr.png', 'png/gb.png', 'png/gm.png',
'png/krg.png', 'png/kz.png', 'png/PL.png', 'png/rf.png', 'png/ukr.png', 'png/usa.png', 'png/uzb.png'];

var INFO = [];

for(var i = 0; i < 13; i++){
	INFO[i] = {
		country : cnt[i],
		tCode : tC[i],
		population : ppn[i],
		flag : fg[i]
	};
}

var tbl = document.createElement("table");
document.body.appendChild(tbl);

for(var i = 0; i < 13; i++){
	var tr = document.createElement("tr");
	tbl.appendChild(tr);
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = INFO[i].country;
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = INFO[i].tCode;
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = INFO[i].population;
	var td = document.createElement("td");
	tr.appendChild(td);
	var img = document.createElement("img");
	td.appendChild(img);
	img.setAttribute("src", INFO[i].flag);
	img.setAttribute("height", "150");
	img.setAttribute("width", "250");
}