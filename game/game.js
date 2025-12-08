import board from "../utils/board.js";

export default function chekFlag(Player, flag){
    if (Player.location == flag.location){
        return "Victory"
    }
}