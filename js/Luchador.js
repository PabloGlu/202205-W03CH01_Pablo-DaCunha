import { Personaje } from "./Personaje.js";
export class Luchador extends Personaje {
    #arme;
    #skill
    constructor(name, family, age, arme, skill) {
        super(name, family, age)
        this.#arme = arme;
        this.#skill = skill;
    }
    
    greetings() {
        return 'Primero pego y luego pregunto';
    }
    
}