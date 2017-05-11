var goods = [];
var show = function(arr) {
    var div = document.getElementById('goods');
    var str = '<ul>';
    arr.forEach(function(elem) {
        str += '<li><p>Название товара: ' + elem.name + '</p><p>Цена: ' + elem.price + '</p></li><input type="number" value="1" id="number"><input type="button" value="+" class="addBtn" data-id="' + elem.id + '"></form>';
    });
    str += '</ul>';
    div.innerHTML = str;

    var btns = document.getElementsByClassName('addBtn');
    [].forEach.call(btns, function(elem) {
        elem.addEventListener('click', addToBasket);
    });
};

var addToBasket = function(e) {
    var id = (e.target).getAttribute('data-id');
    var amount = e.target.previousElementSibling.value;
    var basket = document.getElementById('basket');
    for (var el in goods) {
        if (goods[el].id == id) {
            var name = goods[el].name;
            var price = amount * goods[el].price;
        }
    }
    var str = "<p>" + name + ": " + amount + "</p><p>цена: " + price + "</p>";
    var p = document.createElement(p);
    p.innerHTML = str;
    basket.appendChild(p);
};

var Menu = function(arr) {
    var ul = document.getElementById('bar');
    var str = '<li>';
    arr.forEach(function(elem) {
        str += '<a href="#">' + elem.name + '</a>';
    });
    str += '</li>';
    ul.addEventListener('click', function(e) {
        if (this != e.target) {
            arr.forEach(function(elem) {
                if (elem.name == e.target.textContent) {
                    var adr = elem.adress;
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', adr, true);
                    xhr.onload = function() {
                        goods = JSON.parse(xhr.responseText);
                        show(goods);
                    };
                    xhr.send(null);
                }
            })
        }
    });
    ul.innerHTML = str;
};

var Onload = function(str) {
    var arr = JSON.parse(str);
    Menu(arr);
};

var request = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'menu.json', true);
    xhr.onload = function() {
        Onload(xhr.responseText);
    };
    xhr.send(null);
};
request();