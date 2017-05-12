var td = document.getElementsByTagName('td');
var button = document.getElementsByTagName('button')[0];
var button1 = document.getElementsByTagName('button')[1];
var p = document.getElementById('p');
var pflag = document.getElementById('flag');

var div = document.getElementById('message');
var arr = [];
for (var i = 0; i < td.length; i++) {
    arr[i] = td[i].classList.item(0);
}

var flag = 0;
for (var i = 0; i < td.length; i++) {
    (function (x) {
        td[x].addEventListener('click', function () {
            console.log(x, flag);
            if(x == 15) {
                if (td[x - 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 1].classList.toggle('none');
                    td[x - 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x - 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 4].classList.toggle('none');
                    td[x - 4].classList.add(clas);
                    flag++;
                }
            }

            else if(x == 0) {
                if (td[x + 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 1].classList.toggle('none');
                    td[x + 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 4].classList.toggle('none');
                    td[x + 4].classList.add(clas);
                    flag++;
                }
            }

            else if(x >= 12){
                if (td[x - 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 1].classList.toggle('none');
                    td[x - 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 1].classList.toggle('none');
                    td[x + 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x - 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 4].classList.toggle('none');
                    td[x - 4].classList.add(clas);
                    flag++;
                }
            }

            else if(x <= 3){
                if (td[x - 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 1].classList.toggle('none');
                    td[x - 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 1].classList.toggle('none');
                    td[x + 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 4].classList.toggle('none');
                    td[x + 4].classList.add(clas);
                    flag++;
                }
            }

            else {
                if (td[x - 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 1].classList.toggle('none');
                    td[x - 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 1].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 1].classList.toggle('none');
                    td[x + 1].classList.add(clas);
                    flag++;
                }
                else  if (td[x + 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x + 4].classList.toggle('none');
                    td[x + 4].classList.add(clas);
                    flag++;
                }
                else  if (td[x - 4].classList.contains('none')) {
                    var clas = td[x].classList.item(0);
                    td[x].classList.toggle(clas);
                    td[x].classList.add('none');
                    td[x - 4].classList.toggle('none');
                    td[x - 4].classList.add(clas);
                    flag++;
                }
            }

            pflag.innerText = flag;
            var contr = [];
            var cath = 0;
            for (var i = 0; i < td.length; i++) {
                contr[i] = td[i].classList.item(0);
                if(contr[i] == arr[i]){
                    cath++;
                }
                if(cath == td.length && flag > 1) {
                    setTimeout(function () {
                        p.innerText = "Пятнашки собраны правильно!" + "\nКол-во затраченых шагов: " + flag;
                        div.style.display = 'block';
                        document.body.onclick = function () {
                            div.style.display = 'none';
                        };
                        flag = 0;
                    }, 60);

                }
            }
        });
    })(i);
}

button1.addEventListener('click', function () {
    for (var i = 0; i < td.length; i++) {
        var clas = td[i].classList.item(0);
        td[i].classList.remove(clas);
        td[i].classList.add(arr[i]);
    }
    flag = 0;
    pflag.innerText = flag;
});

button.addEventListener('click', function () {
    flag = 0;
    pflag.innerText = flag;
    function random(a, b) {
        return Math.random()-0.5;
    }
    var arr = [];

    for (var i = 0; i < td.length; i++) {
        arr[i] = td[i].classList.item(0);
    }

    arr.sort(random);
    for (var i = 0; i < td.length; i++) {
        var clas = td[i].classList.item(0);
        td[i].classList.remove(clas);
        td[i].classList.add(arr[i]);
    }
});

// var request = function(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'number.json', true);
//     xhr.onload = function () {
//         var str = xhr.responseText;
//         var mas = JSON.parse(str);
//
//     };
//     xhr.send(null);
// };
// request();