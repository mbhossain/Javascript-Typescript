import { IsPlayer } from '../interfaces/isPlayer.js'
export class Player implements IsPlayer {
    constructor(
        public name: string
        , public age: number
        , readonly country: string
    ) { }

    play() {
        console.log(`${this.name} from ${this.country} is player!`)
    }
}