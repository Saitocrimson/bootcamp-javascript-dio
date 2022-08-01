let  button = document.getElementById('button1');
let inputone=document.getElementById('input1') as HTMLInputElement;
let inputt=document.getElementById('input2')as HTMLInputElement;
let frase = "o resultado eh: ";

function addi(num1:number ,num2:number, printa:boolean )
{
    if(printa)
    {
        let resultado=num1+num2;
        console.log(frase + resultado);

    }
    if(typeof num1==='number'&& typeof num2==='number')return num1+num2;
    else return Number(num1)+Number(num2);
}

if(button)
{
    if(inputone && inputt){
    button.addEventListener('click', () => {addi(Number(inputone.value), Number(inputt.value), true)});
    }
}
