var map = document.getElementsByTagName('canvas')[0];
var health = document.getElementsByTagName('canvas')[1];
var gg = document.getElementById('GG');

var ctxMap = map.getContext('2d');
var ctxHealth = health.getContext('2d');

var x1 = 53, x2 = 219, x3 = 396, y = 555, carH = 90, carW = 60;//параметры машины
var right = 39, left = 37; //код клавиш клавиатуры 39-вправо 37-влево
var flagCar = 0, flagHealth = 3;//флаги для машины и HP
var maxspeed = 0.5, minspeed = 12;//максимальная и минимальная скорость

//блок info
var time = document.getElementsByClassName('info')[0];
var gold = document.getElementsByClassName('info')[1];

//функция для обработчика события нажатия клавиш

var moveCar = function (e) {

    switch (e.keyCode){
        case right :
            if(flagCar == 1) {
                addHealth(flagHealth--);
                flagCar = 1;
            }
            else flagCar++;
            drawCar(flagCar);
            console.log('right', flagCar); break;
        case left :
            if(flagCar == -1) {
                addHealth(flagHealth--);
                flagCar = -1;
            }
            else flagCar--;
            drawCar(flagCar);
            console.log('left', flagCar); break;
    }
};
window.addEventListener('keydown', moveCar);

//функция добавления HP
var addHealth = function (a) {
    console.log(a);
    ctxHealth.clearRect(0, 0, health.width, health.height);
    var flag = a;
    drawHealth(flag);
};

//функция отрисовки HP
var drawHealth = function (flag) {
    if(flag == 0) {
        gg.style.display = 'block';
    }
    ctxHealth.fillStyle = '#FF2E00';
    var a = 0.26, b = 40;
    ctxHealth.beginPath();
    for(var i = 0; i < flag; i++) {
        ctxHealth.moveTo(a * 75 + i * b, a * 40);
        ctxHealth.bezierCurveTo(a * 75 + i * b, a * 37, a * 70 + i * b, a * 25, a * 50 + i * b, a * 25);
        ctxHealth.bezierCurveTo(a * 20 + i * b, a * 25, a * 20 + i * b, a * 62.5, a * 20 + i * b, a * 62.5);
        ctxHealth.bezierCurveTo(a * 20 + i * b, a * 80, a * 40 + i * b, a * 102, a * 75 + i * b, a * 120);
        ctxHealth.bezierCurveTo(a * 110 + i * b, a * 102, a * 130 + i * b, a * 80, a * 130 + i * b, a * 62.5);
        ctxHealth.bezierCurveTo(a * 130 + i * b, a * 62.5, a * 130 + i * b, a * 25, a * 100 + i * b, a * 25);
        ctxHealth.bezierCurveTo(a * 85 + i * b, a * 25, a * 75 + i * b, a * 37, a * 75 + i * b, a * 40);
    }
    ctxHealth.fill();
    ctxHealth.closePath();
};

//отрисовка дороги
ctxMap.lineWidth = 3;
ctxMap.strokeStyle = '#444444';
ctxMap.beginPath();
    ctxMap.moveTo(166, 0);
    ctxMap.lineTo(166, 700);
    ctxMap.moveTo(333, 0);
    ctxMap.lineTo(333, 700);
ctxMap.closePath();
ctxMap.stroke();
//

var drawCar = function (flag) {
    switch (flag) {
        case 0 :
            ctxMap.clearRect(x1, y, carW, carH);
            ctxMap.clearRect(x3, y, carW, carH);
            ctxMap.lineWidth = 1;
            ctxMap.strokeStyle = '#000000';
            ctxMap.fillStyle = '#000000';
            ctxMap.fillRect(x2, y, carW, carH); break;
        case 1 :
            ctxMap.clearRect(x1, y, carW, carH);
            ctxMap.clearRect(x2, y, carW, carH);
            ctxMap.lineWidth = 1;
            ctxMap.strokeStyle = '#000000';
            ctxMap.fillStyle = '#000000';
            ctxMap.fillRect(x3, y, carW, carH); break;
        case -1 :
            ctxMap.clearRect(x3, y, carW, carH);
            ctxMap.clearRect(x2, y, carW, carH);
            ctxMap.lineWidth = 1;
            ctxMap.strokeStyle = '#000000';
            ctxMap.fillStyle = '#000000';
            ctxMap.fillRect(x1, y, carW, carH); break;
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Функция отрисовки препятствий, х - коортината линии, speed - скорость 
var addLet = function (x, speed) {
    var t = Date.now();

    var draw = function (time) {
        var y = time/speed;
        ctxMap.fillStyle = '#A61111';
        ctxMap.clearRect(x, y - 70, 60, 60);
        ctxMap.fillRect(x, y - 60, 60, 60);
    };

    var timer = setInterval(function () {
        var timePassed = Date.now() - t;

        //console.log(Math.floor(timePassed/1000));
        draw(timePassed);

        if(timePassed >= 10000) clearInterval(timer);
    }, 1);
};
//
// var Randomaizer = function () {
//     var t
// };
addLet(x2, 10);
setTimeout(addLet(x1, 10), 2000);
await sleep(2000);


addHealth(flagHealth);//HP
drawCar(flagCar);//первая отрисовка машины
/*
ctxMap.fillStyle = '#ffb0a6';
    ctxMap.beginPath();
    ctxMap.arc(83, 50, 47, 0, 2*Math.PI);
    ctxMap.closePath();
    ctxMap.fill();
   // ctxMap.arc(252, 0, 47, 0, 2*Math.PI);

   // ctxMap.arc(421, 0, 47, 0, 2*Math.PI);
*/

