/* 2. Сделать генерацию корзины динамической: 
верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, 
сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить 
«В корзине: n товаров на сумму m рублей».
*/

var cart = {
	items: [],
	priceSum: 0,
	addItem: function(item){
		this.items.push(item)
		this.priceSum += item.getPrice()
	},
	removeItem: function(item){
		if (item in this.items){
			this.priceSum -= this.items[item].getPrice()
			let position = this.items.indexOf(item, 0)
			this.items.splice(position, 1)
		}
		else {
			alert('Товар отсутствует')
		}
	},
	countCartPrice: function(){
		this.priceSum = 0
		// я не очень понял, для цикла for (Iter in Iterable) - если Iterable массив, 
		// то Iter перебирает индексы элементов массива, а не сами элементы?  
		for (let item in this.items){
			this.priceSum += this.items[item].getPrice()
		}
	},
	getCartPrice: function(){
		return this.priceSum
	},
	getItems: function(){
		let itemsList = []
		for (let item in this.items){
			itemsList.push(this.items[item].getName() + ": " + this.items[item].getPrice())
		}
		return itemsList
	},
	countItems: function(){
		return this.getItems().length
	},
	outputHTML: function(elem){
		var lst = document.createElement('ul')
		if (this.getItems() == 0){
			elem.innerHTML = "Корзина пуста!"
		}
		else{
			for(var item in this.getItems()){
				var itemOutput = document.createElement('li')
				itemOutput.innerHTML = this.getItems()[item]
				lst.appendChild(itemOutput)
			}
			var priceOutput = document.createElement('li')
			priceOutput.innerHTML = "В корзине: " + this.countItems() + " товаров"
			priceOutput.innerHTML += " на сумму " + this.getCartPrice() + " рублей."
			lst.appendChild(priceOutput)		
		}

		elem.appendChild(lst)
	}
}


var bread = {
	name: 'Bread',
	price: 20,
	setPrice: function(number){
		this.price = number
	},
	getPrice: function(){
		return this.price
	},
	getName: function(){
		return this.name
	}
}

var butter = {
	name: "Butter",
	price: 30,
	setPrice: function(number){
		this.price = number
	},
	getPrice: function(){
		return this.price
	}, 
	getName: function(){
		return this.name
	}
}


cart.addItem(bread)
cart.addItem(butter)

var div02 = document.getElementById('div_02');
cart.outputHTML(div02)