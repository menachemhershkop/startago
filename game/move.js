import board from "../utils/board.js";

export default function move(board, location, newLocation, sign){
    board[location.row][location.col] = "-"
    board[newLocation.row][newLocation.col] = sign
    return board
}

// let a=board(10)
// a[5][9]="X"
// move(a,{row:5,col:8},{row:2,col:7},"X");
// move(a,{row:5,col:8},{row:5,col:2},"O");
// move(a,{row:5,col:8},{row:1,col:2},"O");
// console.table(a);
