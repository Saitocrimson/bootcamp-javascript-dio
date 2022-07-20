


function comparar(a,b)
{
    if(a===b){return true;}
    else return false;
}

function operacao( a,b)
{
    
    if(a+b>10 && a+b<20){return 1}
    else if(a+b<20 && a+b<10){return 2;}
    else if(a+b>20){return 3;}

}


function ler()
{
    var a = Number(prompt('digite o primeiro numero:'));
    var b =Number(prompt('digote o segundo numero:'));
    var frase1, frase2;
    if(!a || !b){ler()}
    else{
        if(comparar(a,b)===true){ frase1 = 'Os numeros '+ a +' e '+ b +' sao iguais,';}
        else{ frase1= 'Os numeros '+ a +' e '+ b+ ' nao sao iguais,';}
        if(operacao(a,b)===1)frase2='Sua soma e '+ (a+b) + 'e maior que 10 e menor que 20';
        else if(operacao(a,b)===2) frase2 = 'Sua soma e '+ (a+b) + 'e menor que 10 e menor que 20';
        else if(operacao(a,b)===3) frase2='Sua soma e '+ (a+b) + 'e maior que 10 e maior que 20';
        console.log(frase1+frase2);
    
    }
    
}



ler();






