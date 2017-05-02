var input = document.getElementById("first");
var input1 = document.getElementById("ffirst");
var but1 = document.getElementById("but");
var but2 = document.getElementById("bbut");

var td = document.getElementById("second");
var td2 = document.getElementById("ssecond");
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

var deshifr = function(){
	var result = input1.value.split("");
	for(var i = 0; i < result.length; i++){
		switch(result[i]){
			case 'q' : result[i] = 'й'; break;
			case 'w' : result[i] = 'ц'; break;
			case 'e' : result[i] = 'у'; break;
			case 'r' : result[i] = 'к'; break;
			case 't' : result[i] = 'е'; break;
			case 'y' : result[i] = 'н'; break;
			case 'u' : result[i] = 'г'; break;
			case 'i' : result[i] = 'ш'; break;
			case 'o' : result[i] = 'щ'; break;
			case 'p' : result[i] = 'з'; break;
			case '[' : result[i] = 'х'; break;
			case ']' : result[i] = 'ъ'; break;
			case 'a' : result[i] = 'ф'; break;
			case 's' : result[i] = 'ы'; break;
			case 'd' : result[i] = 'в'; break;
			case 'f' : result[i] = 'а'; break;
			case 'g' : result[i] = 'п'; break;
			case 'h' : result[i] = 'р'; break;
			case 'j' : result[i] = 'о'; break;
			case 'k' : result[i] = 'л'; break;
			case 'l' : result[i] = 'д'; break;
			case ';' : result[i] = 'ж'; break;
			case "'" : result[i] = "э"; break;
			case 'z' : result[i] = 'я'; break;
			case 'x' : result[i] = 'ч'; break;
			case 'c' : result[i] = 'с'; break;
			case 'v' : result[i] = 'м'; break;
			case 'b' : result[i] = 'и'; break;
			case 'n' : result[i] = 'т'; break;
			case 'm' : result[i] = 'ь'; break;
			case ',' : result[i] = 'б'; break;
			case '.' : result[i] = 'ю'; break;
			case 'Q' : result[i] = 'Й'; break;
			case 'W' : result[i] = 'Ц'; break;
			case 'E' : result[i] = 'У'; break;
			case 'R' : result[i] = 'К'; break;
			case 'T' : result[i] = 'Е'; break;
			case 'Y' : result[i] = 'Н'; break;
			case 'U' : result[i] = 'Г'; break;
			case 'I' : result[i] = 'Ш'; break;
			case 'O' : result[i] = 'Щ'; break;
			case 'P' : result[i] = 'З'; break;
			case '{' : result[i] = 'Х'; break;
			case '}' : result[i] = 'Ъ'; break;
			case 'A' : result[i] = 'Ф'; break;
			case 'S' : result[i] = 'Ы'; break;
			case 'D' : result[i] = 'В'; break;
			case 'F' : result[i] = 'А'; break;
			case 'G' : result[i] = 'П'; break;
			case 'H' : result[i] = 'Р'; break;
			case 'J' : result[i] = 'О'; break;
			case 'K' : result[i] = 'Л'; break;
			case 'L' : result[i] = 'Д'; break;
			case ';' : result[i] = 'Ж'; break;
			case '"' : result[i] = 'Э'; break;
			case 'Z' : result[i] = 'Я'; break;
			case 'X' : result[i] = 'Ч'; break;
			case 'C' : result[i] = 'С'; break;
			case 'V' : result[i] = 'М'; break;
			case 'B' : result[i] = 'И'; break;
			case 'N' : result[i] = 'Т'; break;
			case 'M' : result[i] = 'Ь'; break;
			case '<' : result[i] = 'Б'; break;
			case '>' : result[i] = 'Ю'; break;			
		}
	}

	var str = result.reverse().join("");

	td2.innerText = str;
}

but1.addEventListener("click", shifr);
but2.addEventListener("click", deshifr);