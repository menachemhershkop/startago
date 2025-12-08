// import board from './board.js'
import  readlineSync from  'readline-sync'
export default function movement(location ){
    let option = ""
    if (location[1]===9){
        if (location[0] === 0 ){option = readlineSync.question('down:1 ,left:2')}
        if (location[0]===9){option = readlineSync.question('left: ,up:2')}
        else{let option = readlineSync.question('down:1 ,left:2 ,up:3')}
    }

    if (location[0] === 9){
        if (location[1]=== 0 ){option = readlineSync.question('left: ,up:2')}
            else {let option = readlineSync.question('right:1,left:2 ,up:3')}

        }
    if (location[1]===0){
        if (location[0]===0){option = readlineSync.question('right:1 ,down:2')}
        else{option = readlineSync.question('right:1 ,down:2  ,up: 3')}
    }
    else{option = readlineSync.question('right:1 ,left:2 ,up:3 ,down:4')}

    return  option
    }
    


console.log(movement([0 ,0]));

