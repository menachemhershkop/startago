export default function board(num){

const boardSize = num;
const board = [];

for (let i = 0; i != boardSize; i++) {
	board.push([]);
	for (let j = 0; j != boardSize; j++) {
		board[i].push("_");
	}
}
return board
}

let a = board(10)
a[7][3]='O'
console.log(a[9][3]);
let row = 2
let col = 5
a[row][col] = "O"

row++
col++
a[row][col] = "O"
console.table(a);