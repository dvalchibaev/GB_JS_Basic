/*
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return

Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/
alert('Задание 5 и 6')

function sum(num1, num2){
	return num1 + num2
}

function diff(num1, num2){
	return num1 - num2
}

function mult(num1, num2){
	return num1 * num2
}

function div(num1, num2){
	if (num2 != 0){
		return num1 / num2
	}
}

function mathOperation(num1, num2, Operation){
	switch(Operation){
		case 'сложить': 
		    return sum(num1, num2)
		case 'вычесть': 
		    return diff(num1, num2)
		case 'умножить': 
		    return mult(num1, num2)
		case 'разделить': 
		    return div(num1, num2)
		default:
		    alert('Неверная операция')
		    return null
	}
}

var number1 = prompt('Введите первое число')
var number2 = prompt('Введите первое число')
var userOperation = prompt('Введите одну из операций: сложить, вычесть, умножить, разделить')
alert(mathOperation(number1, number2, userOperation))
