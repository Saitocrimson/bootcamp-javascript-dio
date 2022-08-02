"use strict";
function somar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function printa(num1, num2) {
    console.log(num1, num2);
}
function quadrado(num1) {
    return num1 * num1;
}
function dividido(num1) {
    return num1 / num1;
}
console.log(somar(1, 3, quadrado));
console.log(somar(1, 3, dividido));
printa(1, 3);
