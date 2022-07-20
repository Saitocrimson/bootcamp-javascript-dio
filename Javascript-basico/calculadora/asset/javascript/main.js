 function denovo(){
    const opcao = prompt('deseja realizar outra operacao?\nSim\nNao\n');
    if(opcao =='Sim' || opcao=='sim' || opcao=='S'||opcao=='s'){operacao()}
    else if(opcao =='Nao' || opcao=='nao' || opcao=='N' || opcao=='n')alert('ate mais');
    else{alert('Ops! digite novamente'); 
         denovo();}
    
  }

function operacao()
{
  const op = prompt('digite a opcao\n1-soma\n2-subtracao\n3-divisao\n4-multipliacao\n5-potenciacao\n6-sair');
  
  if(!op || op>5){
    operacao();
  }
  else if(op==6){
    alert('ate mais');
  }
  else{
    let num = Number(prompt('insira o primeiro numero:'));
    let num2 = Number(prompt('insira o segundo numero:'));
    let resultado;
    var ok=1;
    if(!num || !num2) { 
        alert('entradas invalidas')
        while(ok==1){
            num = Number(prompt('insira o primeiro numero:'));
            num2 = Number(prompt('insira o segundo numero:'));
            if(typeof(num)=="number"|| typeof(num2)=="number"){ok=2;}
        }
    }
    function soma()
     {
      resultado=num+num2;
      alert('resultado da soma: '+resultado);
      denovo();
      }
  
    function subtracao()
      {
        resultado = num - num2;
        alert('resultado da subtracao: '+ resultado);
        denovo();
      }
      
    function divisao()
      {
        let resultado2;
        resultado=num/num2;
        resultado2=num%num2;
        alert('resultado divisao inteira: '+ resultado+' resto: '+resultado2);
        denovo();
      }
  
    function multiplica()
      {
        resultado = num * num2;
        alert('resultado multiplica: '+resultado);
        denovo();
      }
      
    function potencia()
      {
        resultado = num**num2;
        console.log(resultado);
        alert('resultado potenciacao: ' + resultado);
        denovo();
      }
  
    if(op==1){soma();}
    else if (op==2){subtracao();}
    else if (op==3){divisao();}
    else if (op==4){multiplica();}
    else if (op==5){potencia();}
    }
}


operacao();
