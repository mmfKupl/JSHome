var i = 0;

var catchM = 0;

var catch0 = null;
var catch1 = null;
var catch2 = null;

var input = document.getElementById('f');
var C = document.getElementById('but');
C.addEventListener("click", function(){
	input.value = null;
	catch0 = null;
	catch1 = null;
	catch2 = null;
	i = 0;
})

var div = document.getElementById('div');
div.addEventListener('click', function(){
	if(catch0 != null){
		catch0 /= 1*input.value;
		input.value = catch0;
	}
	else {
		catch0 = 1*input.value;
		input.value = null;
	}
	catch1 = '/';
});

var mul = document.getElementById('mul');
mul.addEventListener('click', function(){
	if(catch0 != null){
		catch0 *= 1*input.value;
		input.value = catch0;
	}
	else {
		catch0 = 1*input.value;
		input.value = null;
	}
	catch1 = '*';
});

var min = document.getElementById('min');
min.addEventListener('click', function(){
	if(catch0 != null){
		catch0 -= 1*input.value;
		input.value = catch0;
	}
	else {
		catch0 = 1*input.value;
		input.value = null;
	}
	catch1 = '-';
});

var plus = document.getElementById('+');
plus.addEventListener('click', function(){
	if(catch0 == null){
		catch0 = 1*input.value;
		input.value = null;
	}
	else {
		catch0 += 1*input.value;
		input.value = catch0;
	}
	catch1 = '+';
});
///////////////////////////////////////////
var one = document.getElementById('1');
one.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 1;
	}
	else input.value +=1;
	if(input.value[0] == '0') input.value = 1;
});
var two = document.getElementById('2');
two.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 2;
	}
	else input.value +=2;
	if(input.value[0] == '0') input.value = 2;
});
var three = document.getElementById('3');
three.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 3;
	}
	else input.value +=3;
	if(input.value[0] == '0') input.value = 3;
});
var four = document.getElementById('4');
four.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 4;
	}
	else input.value += 4;
	if(input.value[0] == '0') input.value = 4;
});
var five = document.getElementById('5');
five.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 5;
	}
	else input.value += 5;
	if(input.value[0] == '0') input.value = 5;
});
var six = document.getElementById('6');
six.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 6;
	}
	else input.value += 6;
	if(input.value[0] == '0') input.value = 6;
});
var seven = document.getElementById('7');
seven.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 7;
	}
	else input.value += 7;
	if(input.value[0] == '0') input.value = 7;
});
var eight = document.getElementById('8');
eight.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 8;
	}
	else input.value += 8;
	if(input.value[0] == '0') input.value = 8;
});
var nine = document.getElementById('9');
nine.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 9;
	}
	else input.value += 9;
	if(input.value[0] == '0') input.value = 9;
});
var ziro = document.getElementById('0');
ziro.addEventListener('click', function(){
	if(catch1 != null){
		input.value = null;
		input.value = 0;
	}
	else 	input.value += 0;
	if(input.value[0] == '0') input.value = 0;
});
//////////////////////////////////////////
var mplus = document.getElementById('M+');
mplus.addEventListener('click', function(){
	catchM += 1*input.value;
});

var mminus = document.getElementById('M-');
mminus.addEventListener('click', function(){
	catchM -= 1*input.value;
});

var mc = document.getElementById('MС');
mc.addEventListener('click', function(){
	catchM = 0;
});

var m = document.getElementById('M');
m.addEventListener('click', function(){
	input.value = catchM;
});
//////////////////////////////////////

var ecv = document.getElementById('=');
ecv.addEventListener('click', function(){
	if(i == 0){
		catch2 = input.value;
		switch(catch1){
			case '/' :	input.value = 1*catch0 / (1*catch2); i++; break;
			case '*' :	input.value = 1*catch0 * 1*catch2; i++; break;
			case '+' :	input.value = 1*catch0 + 1*catch2; i++; break;
			case '-' :	input.value = 1*catch0 - 1*catch2; i++; break;
		}
	}
	else {
		switch(catch1){
			case '/' :	input.value = 1*input.value / (1*catch0); break;
			case '*' :	input.value = 1*input.value * 1*catch0; break;
			case '+' :	input.value = 1*input.value + 1*catch0; break;
			case '-' :	input.value = 1*input.value - 1*catch0; break;
		}
	}
});