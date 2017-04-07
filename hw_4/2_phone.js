var tnum = prompt("num = ");
var test = /(\+375)\s?[\s\(]?\s?(29)+\s?[\s\)]?\s?([0-9]{3})\s?[-\s]?\s?([0-9]{2})\s?[-\s]?\s?([0-9]{2})/
var r = test.exec(tnum);
console.log(r);
var str = "";
for(var i = 1; i < r.length; i++)
	str += r[i];
console.log(str);