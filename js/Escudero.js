import { Personaje } from "./Personaje.js";
import { Luchador } from "./Luchador.js";

export class Escudero extends Personaje {
    #maitre;
    #pelote
    constructor(name, family, age, maitre = new Luchador(), pelote) {
        super(name, family, age)
        this.#maitre = maitre;
        this.#pelote = pelote;
    }
    
    greetings() {
        return 'Soy un loser';
    }
    
}