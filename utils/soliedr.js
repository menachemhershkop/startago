export default function craeteSoldierC(){
    let soldiers = []
    for (let i = 1 ; i < 11 ; i++){
        let soldier = {id : i +1 ,name:'soldier',rank :i  ,sign:"⭕"} 
        soldiers.push(soldier)
    }soldiers.push({name:"flag" ,rank:null  ,sign:"⭕"})
    return soldiers
}
console.log(craeteSoldierC());


function craeteSoldierX(){
    let soldiers = []
    for (let i = 1 ; i < 11 ; i++){
        let soldier = {id : i +1 ,name:'soldier',rank :i  ,sign:"❌"} 
        soldiers.push(soldier)
    }soldiers.push({name:"flag" ,rank:null  ,sign:"❌"})
    return soldiers
}
console.log(craeteSoldierX());