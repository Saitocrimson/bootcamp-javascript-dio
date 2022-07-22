
var string=''
function verificar(string){
  string.split(" ").join("");
  if (!string)return ;
  return string.split("").reverse().join("")===string;
}

function ler(){
  string=prompt('insira uma palavra:');
}

function mostrar(){
  if(verificar(string)==true)console.log('E palindromo')
  else console.log('nao e palindrimo');
}


ler();
mostrar();

