var Name = ["Bob","Carlton","Gordon",
"Percy","Conrad","Quincey",
"Armand","Jamal","Andrew",
"Matthew","Mark","Gerald","Ivan", 
"Pavel", "George", "Vladimir", "Mary", 
"Yan", "Roman",];

var City = ["Minsk", "Mogilev", "Grogno", "Gomel", "Brest"
, "Vitebsk"];

console.log(Name.length + "\n");

var Human = [];

for(var i=0; i < Name.length; i++){
	Human[i] = {
		name: Name[i],
		city: City[parseInt(Math.random()*i)],
		age: parseInt(Math.random()*99)
	}
	console.log(Human[i].name + "\t" + Human[i].city +"\t" + Human[i].age + "\n");
}

Human.sort(function(a, b){
	return (a.age < b.age)? 1:-1;
});

var ul = document.getElementById("list");
Human.forEach(function(e){
	var li = document.createElement('li');
	li.innerHTML = e.name +" " + e.city +" " + e.age;
	ul.appendChild(li);
});