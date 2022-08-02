function somar(num1:number, num2:number, callback:(number:number) =>number):number
{
    let resultado= num1+num2;
    return callback(resultado);
}

function printa(num1:number, num2:number):void
{
    
    console.log(num1,num2);

}

function quadrado(num1:number):number{
return num1*num1;
}
function dividido(num1:number):number{
    return num1/num1;
    }
console.log(somar(1,3, quadrado));
console.log(somar(1,3, dividido));
printa(1,3);