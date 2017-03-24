var time = new Date();

var timeH = time.getHours();
var timeM = time.getMinutes();
var timeS = time.getSeconds();

var hours = 23, minutes = 59, secunds = 60;

var timeh = 0, timem = 0, times = 0;

timeh = hours - timeH;
timem = minutes - timeM;
times = secunds - timeS;

if(times < 0){
	times = 60 + times;
	timem--;
}
if(timem < 0){
	timem = 60 + timem;
	timeh--;
}

alert(time + "\nВремя до конца дня - " + timeh + ":" + timem + ":" + times);
