const pessoa = {
nome:'Quindim',
idade: 28,
profissao: 'Desenvolvedora'
}

const pessoa2:{nome: string, idade: number, profissao: string} = {
    nome:'Pudim',
    idade: 60,
    profissao: 'Chef'
    }

    
const pessoa3:{nome: string, idade: number, profissao: string} = {
    nome:'Alegrim',
    idade: 26,
    profissao: 'desenvolvedora'
    }

    enum Profissao{
        Desenvolvedora,
        Chef,
        Ator
        
    }
    interface gente{
        nome:string,
        idade:number,
        profissao?:Profissao

    }
    interface Estudante extends gente{
        materias : string[]

    } 
    const pessoa4: gente = {
        nome:"Pamonha",
        idade:45,
        profissao:Profissao.Chef

    }
    const pessoa5: gente = {
        nome:"Salpicao",
        idade:35,
        profissao:Profissao.Chef

    }
    const pessoa6: Estudante = {
        nome:"Pao_de_Queijo",
        idade:85,
        profissao:Profissao.Ator,
        materias:['matematica','atuacao','canto']

    }



    const pessoa7: Estudante = {
        nome:"Tomate",
        idade:15,
        materias:['matematica','biologia','geografia']

    }
    function listar(lista:string[])
    {
        for(const item of lista)
        {
            console.log(' + ', item);
        }

    }
    listar(pessoa7.materias);