let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;;

let num1 = Number(campoSaldo.innerHTML);

function somarAoSaldo(soma: number) {
    num1+=soma
    campoSaldo.innerHTML=num1.toString();
    limparSaldo();

}

function limparSaldo() {
    soma.value = '';
}

botaoAtualizar?.addEventListener('click', () => {somarAoSaldo(Number(soma.value))});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
