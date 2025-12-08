import board from "../utils/board.js";
import move from "./move.js";
// import move from "./move.js";
 
function step(board, visual, solider, location, steps){
    board[steps.row][steps.col] = solider
    move(visual, location, steps, solider.sign)
    return board, visual
}

let a = board(10)
let b = board(10)
step(a, b, {name:12,age:13,sign:"X"},{row:4, col:7},{row:3, col:8})
console.table(a);
console.table(b)