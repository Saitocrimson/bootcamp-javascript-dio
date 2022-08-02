let renegado: any
renegado=3;
renegado='anyyyyy';

let string: string = 'verificar';
string = renegado;

let desconhecido: unknown
desconhecido=3;
desconhecido='desconhecidoooooo';

let string2: string = 'verificar';

if(typeof desconhecido ==='string')
{
    string2 = desconhecido;

}

function erros(erro:string, codigo:string)
{
    throw{error:erro, code:codigo};
}
erros('deu ruim', 2000)