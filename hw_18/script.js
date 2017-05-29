var canvas = document.getElementsByTagName('canvas')[0];
var button = document.getElementsByTagName('button')[0];
var ctx = canvas.getContext('2d');
ctx.lineWidth = 2;
var div = document.getElementById('canvas');
div.onmousedown = function (e) {
    div.onmousemove = function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        ctx.strokeRect(x, y, 1, 1);
    };

    div.onmouseup = function () {
        div.onmousemove = null;
    };
};

button.onclick = function(){
  ctx.clearRect(0, 0, 700, 700);
};

window.onunload = function () {
    localStorage.setItem('pik', canvas.toDataURL());
};

window.onload = function () {
    canvas.drawImage(localStorage.getItem('pik'), 0, 0);
};