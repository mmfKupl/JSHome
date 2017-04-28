var prdct = ['kolbosa', 'stul', 'mashina', 'sosiski', 'baton', 'hleb', 'chips', 'morojenoe', 'pivo', 'pomidor'];
var tt = ['eda', 'vesch', 'transport', 'eda', 'eda', 'eda', 'eda', 'eda', 'eda', 'eda'];
var cc = [12, 90, 20345, 20, 8, 8, 10, 11, 5, 3];
var dd = ['11.01.2017', '24.05.2010', '9.08.2000', '21.04.2017', '18.11.2017', '30.07.2016', '12.10.2017', '17.11.2017', '6.01.2017', '20.06.2016'];
//var nn = [3, 4, 1, 10, 2, 2, 6, 12, 8, 9];


var i = 0;

function Product(name, type, cost, date){
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.date = date;
};

Product.prototype.ind = function(){ i++; };

function WProduct(best_befor){
	this.best_befor = best_befor;
};

WProduct.prototype.ShLife = function(){ console.log(best_befor); };

function Shop(Name, address){
	this.Name = Name;
	this.address = address;
	this.products = [];
	this.exr_chr = 2;
	this.income = 0;
};

Shop.prototype = Object.create(Product.prototype);
Shop.prototype.constructor = Shop;

Shop.prototype = {
	addPr: function(name, type, cost, date){ 
				var pt = new Product(name, type, cost, date);
				this.products[this.products.length] = pt;
				pt.ind();
			},
	redPr: function(name){
				for(var j = 0; j < this.products.length; j++){
					if(this.products[j].name == name)
						this.products.splice(j, j+1);
				}
			},
	sellPr: function(name){
				for(var j = 0; j < this.products.length; j++){
					if(this.products[j].name == name){
						this.income += this.products[j].cost;
						this.products.splice(j, j+1);
					}
					
				}
			},
	info: function(){
				console.log(this.Name + "\n" + this.address);
				for(var j = 0; j < this.products.length; j++){
					console.log(this.products[j].name + " - " + this.products[j].type + " - " + this.products[j].cost + " - " + this.products[j].date);
				}
				console.log(this.income);
			}
}

function Market(){
	this.Shop = [];
}

Market.prototype = Object.create(Shop.prototype);
Market.prototype.constructor = Market;

Market.prototype = {
	AddS: function(name){
		this.Shop[this.Shop.length] = name;
	},
	Info: function(){
		console.log("Все магазины на рынке: {");
		for(var j = 0; j < this.Shop.length; j++)
			console.log(this.Shop[j].Name);
		console.log("}");
		for(var j = 0; j < this.Shop.length; j++)
			console.log(this.Shop[j].info());
	} 
};


var neww = new Shop('BIGZ', 'logoiski trakt');
for(var j = 0; j < prdct.length; j++){
	neww.addPr(prdct[j], tt[j], cc[j], dd[j]);
}
for(var j = 0; j < prdct.length; j++){
	neww.sellPr(prdct[j]);
}

var neww2 = new Shop("KORONA", 'Timiryazeva');
for(var j = 0; j < prdct.length; j++){
	neww2.addPr(prdct[j], tt[j], cc[j], dd[j]);
}
for(var j = 0; j < prdct.length - 5; j++){
	neww2.redPr(prdct[j]);
}

var neww3 = new Shop("BELMARKET", 'Karbisheva');
for(var j = 0; j < prdct.length; j++){
	neww3.addPr(prdct[j], tt[j], cc[j], dd[j]);
}


var mark = new Market();
mark.AddS(neww);
mark.AddS(neww2);
mark.AddS(neww3);

mark.Info();
console.log("Счетчик насчитал, что создано " + i + " товаров");