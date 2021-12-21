var Cart = []

function addCart(Cart_, item, price){
	Cart_.push([item, price])
}


function countCartPrice(Cart_){
	var sum = 0
	for(var i=0; i < Cart_.length; i++){
		sum += (Cart_[i])[1]
	}
	return sum
}


addCart(Cart, 'foo', 20)
addCart(Cart, 'boo', 40)
console.log(countCartPrice(Cart))