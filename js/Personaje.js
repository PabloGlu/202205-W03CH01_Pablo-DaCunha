export class Personaje {
    #name;
    #family;
    #age;
    #state;
    constructor(name, family, age) {
        this.#name = name
        this.#family = family
        this.#age = age;
        this.#state = 'alive'
    }
    get name() {
        return this.#name;
    }
    get family() {
        return this.#family;
    }
    get age() {
        return this.#age;
    }
    get state() {
        return this.#state;
    }
    greetings() {

    }
    // set name(value) {
    //     this._name = value;
    // }

    
}    

