const alunos = [
  {
    nome :'joao',
    nota :9,
    turma:6789,
    
  },
  
  {
    nome: 'shy',
    nota: 7,
    turma:7890,
    
  },
  
  {
    nome:'pudin',
    nota:0,
    turma:6780,
  }]


function calcu(arry, media){
  let aux=[];
  for(let i=0;i<arry.length;i++){
    
   const  {nota,nome}=arry[i];
    if(nota>= media){
      aux.push(nome);
    }
  }
  return aux;
}


console.log(calcu(alunos,6));
