/*
2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
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
console.log(cart.getCartPrice())
console.log(cart.getItems())
