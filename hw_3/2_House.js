var n = 3;

var Name = ["Bob","Carlton","Gordon",
"Percy","Conrad","Quincey",
"Armand","Jamal","Andrew",
"Matthew","Mark","Gerald","Ivan", 
"Pavel", "George", "Vladimir", "Mary", 
"Yan", "Roman"];

var house={

 	name1: [], 
 	flats: [],
 	addTenant: function(name, number){	
 		if(isFinite(number) && (number <= this.flats.length) && number ){
	 		this.name1.push({name: name, flatNumber: number});
	 		this.flats[number-1].name1.push(name);
	 	}
 	},
 	cleanFlat: function(number){
 		if(typeof (arguments[0]) == "undefined"){
 			var number = parseInt(prompt("Vvedite kvartiru: "));
 		}
 		if(isFinite(number) && (number <= this.flats.length) && number){
	 		 this.flats[number-1].name1.length = 0;
	 		 for(var i = 0; i < this.name1.length; i++){
	 		 	if(this.name1[i].flatNumber == number){
	 		 		this.name1.splice(i, 1);
	 		 		i--;
	 		 	}
	 		 }
 		}
 		else{
 			console.error("oshibka");
 		}

 	},
 	outputListOfname1: function(number){
 		if(typeof (arguments[0]) == "undefined"){
 			var number = parseInt(prompt("Vvedite kvartiru: "));
 		}
 		if(isFinite(number) && (number <= this.flats.length) && number){
 			if(this.flats[number-1].name1.length){
 				console.log("kvartirant' " + number + ": " + this.flats[number-1].name1.join(", "));
 			}
 			else{
 				console.log("v kvartire" + number + " nikogo net");
 			}
	 	}	
	 	else{
	 		console.error("oshibka");
	 	}
 	},
 	calculateCost: function(sum){
 		if(typeof (arguments[0]) == "undefined"){
 			var sum = parseFloat(prompt("vvedite sum: "));
 		}
 		if(isFinite(parseFloat(sum)) && (sum > 0)){
	 		var totalSquare=0;
	 		var listOfCost = [];

	 		this.flats.forEach(function(e){
	 			if(e.name1.length){
	 				totalSquare +=e.square;
	 			}
	 		});
	 		this.flats.forEach(function(e){
	 			if(e.name1.length){
	 				var cost = sum / totalSquare * e.square / e.name1.length;
	 				e.name1.forEach(function(c){
	 					listOfCost.push({name: c, cost: cost});
	 				})
	 				
	 			}
	 		})
	 		listOfCost.forEach(function(e){
	 			console.log(""+ e.name + " : " + e.cost.toFixed(3));
	 		})
		}
		else{
			console.error("oshibka");
		}
 	}
}

for(var i = 0; i < n; i++){
	house.flats[i] = {
		square: parseInt(Math.random()*20+20),
		level: parseInt(Math.random()*n/4+1),
		name1: []
	}
}

for(var i=0; i<Name.length; i++){
	house.name1[i] = {
		name: Name[i],
		flatNumber: parseInt(Math.random()*1000%n+1)
	}
	house.flats[house.name1[i].flatNumber-1].name1.push(Name[i]) ;
}
console.log(house);
house.outputListOfname1(1);
console.log("kol-vo ludey v house: " + house.name1.length);
house.addTenant("Alex", 1);
house.outputListOfname1(1);
console.log("kol-vo ludey v house: " + house.name1.length);
house.cleanFlat(1);
house.outputListOfname1(1);
console.log("kol-vo ludey v house: " + house.name1.length);
house.calculateCost(800);
console.log(house);



