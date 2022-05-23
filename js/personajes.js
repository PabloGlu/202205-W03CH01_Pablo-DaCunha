// import { Personaje } from "./Personaje.js";
import { Luchador } from "./Luchador.js";
import { Escudero } from "./Escudero.js";
import { Rey } from "./Rey.js";
import { Asesor } from "./Asesor.js";
// import { compileString } from "sass";

export const arrayPersonajes = [

]

arrayPersonajes.push(new Rey 
    ('Joffrey',14, 'Baratheon',  1)
    );

arrayPersonajes.push(new Luchador 
    ('Jaime', 'Lannister', 32, 'sword', 10)
    );

arrayPersonajes.push(new Luchador 
    ('Daenerys', 'Targaryen', 28, 'dragon', 9)
    );

arrayPersonajes.push(new Asesor 
    ('Tyrion', 'Lannister', 34, arrayPersonajes[2])
    );
arrayPersonajes.push(new Escudero 
    ('Bronn', 'BlackWater', 29, arrayPersonajes[1], 5)
    );
    
// console.log(arrayPersonajes)