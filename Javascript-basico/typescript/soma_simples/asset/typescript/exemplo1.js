"use strict";
const pessoa = {
    nome: 'Quindim',
    idade: 28,
    profissao: 'Desenvolvedora'
};
const pessoa2 = {
    nome: 'Pudim',
    idade: 60,
    profissao: 'Chef'
};
const pessoa3 = {
    nome: 'Alegrim',
    idade: 26,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["Chef"] = 1] = "Chef";
    Profissao[Profissao["Ator"] = 2] = "Ator";
})(Profissao || (Profissao = {}));
const pessoa4 = {
    nome: "Pamonha",
    idade: 45,
    profissao: Profissao.Chef
};
const pessoa5 = {
    nome: "Salpicao",
    idade: 35,
    profissao: Profissao.Chef
};
const pessoa6 = {
    nome: "Pao_de_Queijo",
    idade: 85,
    profissao: Profissao.Ator,
    materias: ['matematica', 'atuacao', 'canto']
};
const pessoa7 = {
    nome: "Tomate",
    idade: 15,
    materias: ['matematica', 'biologia', 'geografia']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' + ', item);
    }
}
listar(pessoa7.materias);
