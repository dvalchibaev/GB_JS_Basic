/*
С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень
*/
alert('Задание 8')

function power(val, pow){
	if (pow <= 1){
		return val
	}
	return val * power(val, --pow)
}

var userNumber = prompt('введите число')
var userPower = prompt('введите степень') 
alert(userNumber + ' ** ' + userPower +' = ' + power(userNumber, userPower))
