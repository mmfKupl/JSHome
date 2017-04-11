var input = document.getElementById("first");
var but1 = document.getElementById("but");
var td = document.getElementById("second");
//переводит в другую раскладку и озеркаливает
var shifr = function(){
	var result = input.value.split("");
	for(var i = 0; i < result.length; i++){
		switch(result[i]){
			case 'й' : result[i] = 'q'; break;
			case 'ц' : result[i] = 'w'; break;
			case 'у' : result[i] = 'e'; break;
			case 'к' : result[i] = 'r'; break;
			case 'е' : result[i] = 't'; break;
			case 'н' : result[i] = 'y'; break;
			case 'г' : result[i] = 'u'; break;
			case 'ш' : result[i] = 'i'; break;
			case 'щ' : result[i] = 'o'; break;
			case 'з' : result[i] = 'p'; break;
			case 'х' : result[i] = '['; break;
			case 'ъ' : result[i] = ']'; break;
			case 'ф' : result[i] = 'a'; break;
			case 'ы' : result[i] = 's'; break;
			case 'в' : result[i] = 'd'; break;
			case 'а' : result[i] = 'f'; break;
			case 'п' : result[i] = 'g'; break;
			case 'р' : result[i] = 'h'; break;
			case 'о' : result[i] = 'j'; break;
			case 'л' : result[i] = 'k'; break;
			case 'д' : result[i] = 'l'; break;
			case 'ж' : result[i] = ';'; break;
			case 'э' : result[i] = "'"; break;
			case 'я' : result[i] = 'z'; break;
			case 'ч' : result[i] = 'x'; break;
			case 'с' : result[i] = 'c'; break;
			case 'м' : result[i] = 'v'; break;
			case 'и' : result[i] = 'b'; break;
			case 'т' : result[i] = 'n'; break;
			case 'ь' : result[i] = 'm'; break;
			case 'б' : result[i] = ','; break;
			case 'ю' : result[i] = '.'; break;
			case 'Й' : result[i] = 'Q'; break;
			case 'Ц' : result[i] = 'W'; break;
			case 'У' : result[i] = 'E'; break;
			case 'К' : result[i] = 'R'; break;
			case 'Е' : result[i] = 'T'; break;
			case 'Н' : result[i] = 'Y'; break;
			case 'Г' : result[i] = 'U'; break;
			case 'Ш' : result[i] = 'I'; break;
			case 'Щ' : result[i] = 'O'; break;
			case 'З' : result[i] = 'P'; break;
			case 'Х' : result[i] = '{'; break;
			case 'Ъ' : result[i] = '}'; break;
			case 'ф' : result[i] = 'A'; break;
			case 'Ы' : result[i] = 'S'; break;
			case 'В' : result[i] = 'D'; break;
			case 'А' : result[i] = 'F'; break;
			case 'П' : result[i] = 'G'; break;
			case 'Р' : result[i] = 'H'; break;
			case 'О' : result[i] = 'J'; break;
			case 'Л' : result[i] = 'K'; break;
			case 'Д' : result[i] = 'L'; break;
			case 'Ж' : result[i] = ':'; break;
			case 'Э' : result[i] = '"'; break;
			case 'Я' : result[i] = 'Z'; break;
			case 'Ч' : result[i] = 'X'; break;
			case 'С' : result[i] = 'C'; break;
			case 'М' : result[i] = 'V'; break;
			case 'И' : result[i] = 'B'; break;
			case 'Т' : result[i] = 'N'; break;
			case 'Ь' : result[i] = 'M'; break;
			case 'Б' : result[i] = '<'; break;
			case 'Ю' : result[i] = '>'; break;			
		}
	}

	var str = result.reverse().join("");

	td.innerText = str;
}

but1.addEventListener("click", shifr);




 
