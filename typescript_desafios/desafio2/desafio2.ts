
enum Profissaos{
    Atriz,
    Padeiro
}

interface pessoa{
    nome:string, 
    idade:number,
    profissao?:Profissaos;
}

const pessoa01: pessoa = {
    nome:"maria",
    idade:29,
    profissao:Profissaos.Atriz

}
const pessoa02: pessoa = {
    nome:"roberto",
    idade:19,
    profissao:Profissaos.Padeiro
}

const pessoa03: pessoa = {
    nome:"laura",
    idade:32,
    profissao:Profissaos.Atriz
}

const pessoa04: pessoa = {
    nome:"carlos",
    idade:19,
    profissao:Profissaos.Padeiro
}

