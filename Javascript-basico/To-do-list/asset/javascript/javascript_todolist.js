var botao = document.getElementById('ad');
var texto = document.getElementById('barra');
var item = document.getElementById('item');
var todos_lista =document.getElementById('todos-lista');

todos_lista.addEventListener('click', deletar);

function adicionar(){
  event.preventDefault();
  console.log('click');
  const criar= document.createElement('div');
  criar.classList.add('todo');
  
  
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('chequin');
    criar.appendChild(input);
 const topico=document.createElement('li');
  topico.classList.add('todo-lista');
  topico.innerText=texto.value;
  criar.appendChild(topico);

  
 
  const button2=document.createElement('button');
  button2.innerHTML='del';
  button2.classList.add('buton2');
  criar.appendChild(button2);
  
  todos_lista.appendChild(criar);
  deletar();
}

function deletar(){
  const item = event.target;
   const tudo= item.parentElement;
  if(item.classList[0] ==='buton2'){
    tudo.remove();
  }
  if (item.classList[0]=== 'chequin'){
    tudo.classList.toggle('completed');
  
  
  }
  
}
