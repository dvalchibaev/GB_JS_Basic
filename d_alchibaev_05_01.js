/*
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться 
числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

3. (*) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах 
и быть соответственно черными и белыми.
*/
function chessCell(positionX, positionY){
	if (positionX == 0 || positionX == 9){
		return " abcdefgh "[positionY]
	}
	if (positionY == 0 || positionY == 9){
		return 9 - positionX
	}
	if (positionX == 1 || positionX == 8){
		return " RNBKQBNR "[positionY]
	}
	if (positionX == 2 || positionX == 7){
		return "p"
	}
	return ' '
}


function chessCellColor(positionX, positionY){
	if (positionX % 9 == 0 || positionY % 9 == 0){
		return "#FFFFFF"
	}
	if ((positionX + positionY) % 2 == 1){
		return "#000000"
	}
	else{
		return "#FFFFFF"
	}
}

function chessCellFontColor(positionX, positionY){
	if (positionX % 9 == 0 || positionY % 9 == 0){
		return "#000000"
	}
	if ((positionX + positionY) % 2 == 1){
		return "#FFFFFF"
	}
	else{
		return "#000000"
	}
}

function drawChessBoard(htmlDiv){
	var table = document.createElement("table")
	for(var i=0; i <= 9; i++){
		var column = document.createElement("tr")
		table.appendChild(column)
		for(var j=0; j <= 9; j++){
			var cell = document.createElement("td")
			cell.setAttribute("bgcolor", chessCellColor(i, j))
			var font = document.createElement("font")
			cell.appendChild(font)
			font.setAttribute("color", chessCellFontColor(i, j))
			font.innerHTML = chessCell(i, j)
			column.appendChild(cell)
		}
	}
	htmlDiv.appendChild(table)
}

var div01 = document.getElementById('div_01');

drawChessBoard(div01)
