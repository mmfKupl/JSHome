var q = [
'Млечный путь - это...', 
'Как можно из Евразии пешком добраться в Северную Америку?', 
'Туфелька-Инфузория - это...', 
'Царь Петр первый какой по счету из рода Романовых?',
'Кто изобрел Джинсы?', 
'Какой советско-российский фильм получил "Оскара"?',
'Кто написал "Лунную сонату"?', 
'Кому принадлежит фраза "Время-Деньги"', 
'Кто изобрел компьютер?',
'Первый российский автомобиль?'
];

var r = [];
r[0] = ['Галактика', 'Скопление звезд', 'Парад планет', 'Солнечная система'];
r[1] = ['Через перешеек в Беринговом проливе', 'По льду из Чукотки на Аляску', 'По новому Евро-Американскому мосту', 'Никак'];
r[2] = ['Бактерия', 'Вирус', 'Простейший, одноклеточный организм', 'Модная обувь', 'Микроб'];
r[3] = ['1й', '2й', '3й', '4й', '5й'];
r[4] = ['Пьер Карден', 'Левай Страусс', 'Джанни Версачи', 'Дольче Габбана'];
r[5] = ['Кин-Дза-Дза', 'Москва слезам не верит', 'Батальоны просят огня', 'Сталкер', 'Солярис'];
r[6] = ['Бах', 'Бетховен', 'Чайковский', 'Шопен', 'Лист'];
r[7] = ['Рокфеллеру', 'Франклину', 'Бизнесменам', 'Корнеги', 'Соросу'];
r[8] = ['Билл Гейтс', 'Стив Джобс', 'Чарльз Бэббидж', 'Конрад Цузе,', 'Алан Тьюринг'];
r[9] = ['АМО', 'ЗИС', 	'Руссобалт', 'Москвич', 'ТАЗ'];

var opin = ['Тут все очень плохо...', 'Неплохо, почитайте больше книжек:)', 'Средний результат, можете не сильно волноваться среди умных людей.',
'Отличные знания!', 'Можете собой гордиться!'];

var num = [5, 5, 10, 15, 25, 10, 10, 15, 5, 10];

var key = [0, 3, 2, 2, 1, 1, 1, 1, 2, 2];
//'Галактика', 'Никак', 'Простейший, одноклеточный организм', '3й', 'Левай Страусс', ''Бетховен', 'Чарльз Бэббидж','Руссобалт'

var nn = ['f', 's', 't', 'q', 'w', 'e', 'r', 't', 'y', 'u'];
var value = 0;
var key1 = [];
var form = document.getElementById('form');
for(var i = 0; i < q.length; i++){
	var fset = document.createElement('fieldset');
	form.appendChild(fset);
	fset.setAttribute('id', 'f'+(i+1));
	//fset.setAttribute('class', 'f'+(i+1));
	var leg = document.createElement('legend');
	fset.appendChild(leg);
	leg.innerText = q[i];
	
	for(var j = 0; j < r[i].length; j++){
		var input = document.createElement('input');
		fset.appendChild(input);
		input.outerHTML = '<input type="radio" name="question' + (i+1) + '" id="' + nn[i] + (j+1) + '" value="' + r[i][j] + '">' + r[i][j] + '</input><br>';
		}
}


var button = document.createElement('button');
form.appendChild(button);
button.setAttribute('type', 'button');
button.innerText = "Ответить!";

button.onclick = function(){
	for(var i = 0; i < q.length; i++){
		for(var j = 0; j < r[i].length; j++){
			var q1 = document.getElementsByName('question'+(i+1));
				if(q1[j].checked)
					key1[i] = j;
		}
	}
	
	console.log(key1.join(' '));

	
	for(var i = 0; i < key.length; i++){
		if(key1[i] == key[i])
			value += num[i];
		else if(key1[i] == undefined) 
			value += 0;
		else 
			value += 1.5;
	}
	
	if(value <= 20)
		alert("Вы прошли тест на: " + value + " баллов из 100!" + "\n" + opin[0]);
	else if(value > 20 && value <= 40)
		alert("Вы прошли тест на: " + value + " баллов из 100!" + "\n" + opin[1]);
	else if(value > 40 && value <= 60)
		alert("Вы прошли тест на: " + value + " баллов из 100!" + "\n" + opin[2]);
	else if(value > 60 && value <= 80)
		alert("Вы прошли тест на: " + value + " баллов из 100!" + "\n" + opin[3]);
	else if(value > 80 && value <= 100)
		alert("Вы прошли тест на: " + value + " баллов из 100!" + "\n" + opin[4]);
};



