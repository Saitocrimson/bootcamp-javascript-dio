let  button = document.getElementById('button1');
let inputone=document.getElementById('input1') as HTMLInputElement;
let inputt=document.getElementById('input2')as HTMLInputElement;


function addi(num1:number ,num2:number )
{
    if(typeof num1==='number'&& typeof num2==='number')return num1+num2;
    else return Number(num1)+Number(num2);
}

if(button)
{
    if(inputone && inputt){
    button.addEventListener('click', () => {console.log(addi(Number(inputone.value), Number(inputt.value)))});
    }
}
