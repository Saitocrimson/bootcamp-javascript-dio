"use strict";
let renegado;
renegado = 3;
renegado = 'anyyyyy';
let string = 'verificar';
string = renegado;
let desconhecido;
desconhecido = 3;
desconhecido = 'desconhecidoooooo';
let string2 = 'verificar';
if (typeof desconhecido === 'string') {
    string2 = desconhecido;
}
function erros(erro, codigo) {
    throw { error: erro, code: codigo };
}
erros('deu ruim', 2000);
