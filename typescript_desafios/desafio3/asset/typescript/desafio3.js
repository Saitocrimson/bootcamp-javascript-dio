"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
;
let num1 = Number(campoSaldo.innerHTML);
function somarAoSaldo(soma) {
    num1 += soma;
    campoSaldo.innerHTML = num1.toString();
    limparSaldo();
}
function limparSaldo() {
    soma.value = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', () => { somarAoSaldo(Number(soma.value)); });
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
