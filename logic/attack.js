export default function attack(p1, p2, location){
    if (p1.rank == 1 && p2.rank==10){
        location = p1
    }
    else if (p1.rank == 10 && p2.rank==1){
        location = p2
    }
    
    else if (p1.rank > p2.rank){
        location=p1
    }
    else if(p1.rank < p2.rank){
        location=p2
    }
    return location
}
