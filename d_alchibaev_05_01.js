/*
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться 
числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/
function chessCell(positionX, positionY){
	if (positionX == 0 || positionX == 9){
		return ' ABCDEFGH '[positionY]
	}
	if (positionY == 0 || positionY == 9){
		return 9 - positionX
	}
	if ((positionX + positionY) % 2 == 0){
		return '#'
	} 
	return '0'
}

function drawChessboard(htmlDiv){
	var table = document.createElement("table")
	for(var i=0; i <= 9; i++){
		var column = document.createElement("tr")
		table.appendChild(column)
		for(var j=0; j <= 9; j++){
			var cell = document.createElement("td")
			cell.innerHTML = chessCell(i, j)
			column.appendChild(cell)
		}
	}
	htmlDiv.appendChild(table)
}

var div01 = document.getElementById('div_01');

drawChessboard(div01)
