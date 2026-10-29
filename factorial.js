const prompt = require("prompt-sync")();

let numero = prompt("Ingresa un número: ");

//validar que sea un numero
while (numero === " " || numero === null || isNaN(numero) || Number(numero) < 0 || numero != parseInt(numero)) {
    numero = prompt("Error. Ingresa un número entero positivo: ");
} //while

numero = Number(numero);

//calcular factorial
let factorial = 1; // el valor del factorial inicia en 1

for (let i = 1; i <= numero; i++) {
    factorial = factorial * i; // el valor del factorial va cambiando en cada multiplicación
}//for

console.log("El factorial de " + numero + " es: " + factorial);