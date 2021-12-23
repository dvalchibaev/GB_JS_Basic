/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numberToObject(number){
	if (number > 999 || number < 0){
		console.log('wrong number')
		return null
	}
	ones = number % 10
	number = (number - ones) / 10
	tens = number % 10
	number = (number - tens) / 10
	hundreds = number % 10
	result = {
		'ones': ones,
		'tens': tens,
		'hundreds': hundreds
	}
	return result
}

var num = Number(prompt('Введите число от 0 до 999'))
console.log(numberToObject(num))
