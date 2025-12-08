function craeteSoldier(){
    let soldiers = []
    for (let i = 1 ; i < 11 ; i++){
        let soldier = {name:'soldier',rank :i} 
        soldiers.push(soldier)
    }soldiers.push({name:"flag" ,rank:null})
    return soldiers
}

console.log(craeteSoldier())
