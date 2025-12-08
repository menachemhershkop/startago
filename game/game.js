import board from "../utils/board.js";

export default chekFlag(Player, flag){
    if (Player.location == flag.location){
        return "Victory"
    }
}