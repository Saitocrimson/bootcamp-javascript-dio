"use strict";
let palavra;
palavra = "string";
palavra = 1;
palavra = true;
let palavra_um = "teste";
palavra_um = palavra;
let palavra_dois = "pratico";
palavra_dois = palavra;
function unir(frase1, frase2) {
    console.log(frase1 + frase2);
}
unir(palavra_um, palavra_dois);
unir("oi", " como vai?");
