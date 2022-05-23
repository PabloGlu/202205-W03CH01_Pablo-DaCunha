import { Personaje } from "./Personaje.js";


export class Rey extends Personaje {
    #yearsKingdom;
    constructor(name, family, age, yearsKingdom) {
        super(name, age, family)
        this.#yearsKingdom = yearsKingdom;
    }
    
    greetings() {
        return 'Vais a morir todos';
    }
    
}
