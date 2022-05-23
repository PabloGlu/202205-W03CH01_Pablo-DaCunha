import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje {
    #advised;
    
    constructor(name, family, age, advised = new Personaje) {
        super(name, age, family)
        this.#advised = advised;
        
    }
    
    greetings() {
        return 'No sé por qué, pero creo que voy a morir pronto';
    }
    
}