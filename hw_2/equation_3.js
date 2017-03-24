var n = 1*prompt(" n = "), x = 1*prompt(" x = ");
var a = new Array(n+1);
for(var i = 0; i < a.length; i++)
	a[i] = 1*prompt("a[" + (i+1) + "] = ");

var eqv = 0;
for(var i = 0; i < a.length; i++){
	eqv += a[i]*(Math.pow(x,i))
}

alert(eqv);