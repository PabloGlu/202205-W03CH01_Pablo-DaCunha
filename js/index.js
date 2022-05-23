import { Personaje } from "./Personaje.js";
import { Luchador } from "./Luchador.js";
import { Escudero } from "./Escudero.js";
import { Rey } from "./Rey.js";
import { Asesor } from "./Asesor.js";
import { carruselTemplate } from "./templates/templates.js";
import { arrayPersonajes } from "./personajes.js";

// IIFE
(() => {
    document.addEventListener('DOMContentLoaded', index);
})()  


function index() {
    console.log(arrayPersonajes);
    const carrusel = document.querySelector('#carrusel');
    carrusel.innerHTML = carruselTemplate(arrayPersonajes);
    // carrusel.innerHTML = carruselTemplate(arrayPersonajes[0].name, arrayPersonajes[0].family);
}
