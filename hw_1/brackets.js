var str = prompt("Введите строку содержащую скобки: ");

var tmp = '';
var a = "\u0028", b = "\u0029";
for(var i = 0; i < str.length; i++){
	switch (str[i]){
		case a :
			tmp += a;
			break;
		case b : 
			tmp += b;
			break;
	}	
}

alert(str + '\n' + tmp);		

var tmp1 = 0;

for(var i = 0; i < tmp.length; i++){
		switch(tmp[i]){
			case '\u0028' : tmp1 ++; break;
			case '\u0029' : tmp1 --; break;
		}
		if(tmp1 < 0) {
			alert('Скобки написаны неправильно!');
			break;
		}
	}
if(tmp1 == 0) alert('Скобки написаны правильно!');

