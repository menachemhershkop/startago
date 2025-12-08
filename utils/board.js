import craeteSoldierC from "./soliedr.js";
import craeteSoldierX from "./soliedr.js";
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

let a = board(11)


console.table(a);
s = craeteSoldierX()
console.log(s);

// for (let j =0; j < boardSize;i++){
// 	for (let u= 0; u<boardSize;u++){
// 		a[j][u]= s[1].sign
// 	}


console.table(a)

}