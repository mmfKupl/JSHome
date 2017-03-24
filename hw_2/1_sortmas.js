var s = 1*prompt("s = "), n = 1*prompt("n = "), p = 1*prompt("p = ");

var mas = new Array(n);
var a = s*p/100;

for(var i = 0; i < mas.length; i++){
	mas[i] = (s - a) + Math.round(Math.random()*(2*a));
}

var tmp;

//сортировка массива

for(var i = 0; i < mas.length; i++) {
    for (var j = i+1; j < mas.length; j++) {
        if (mas[i] > mas[j]) {
            tmp = mas[j];
            mas[j] = mas[i];
            mas[i] = tmp; 
		}
	}
}

//mas = mas.sort(); или можно отсортировать этим способом

var str = new Array(n);
for(var i = 0; i < mas.length; i++) 
	str[i] = mas[i];

str = str.join(", ");

var avr = 0;
for(var i = 0; i < mas.length; i++){
	avr += mas[i];
}

avr = avr/n;

alert(str + "          " + avr);
	
