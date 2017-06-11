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

// window.onunload = function () {
//     var str = JSON.stringify(ctx.getImageData(0, 0, 700, 700));
//     localStorage.setItem('pik', str);
// };

window.onload = function () {
    var str = JSON.stringify(ctx.getImageData(0, 0, 700, 700));
    console.log(str);
    console.log(JSON.parse(str));
    console.log(localStorage.getItem('pik'));
    var imageData = JSONE.parse(localStorage.getItem('pik'));
    ctx.putImageData(imageData, 0, 0);

};