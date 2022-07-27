function validaarray(array,num){
try{
  if(!array && !num) throw new ReferenceErro('envie parametros');
  if(typeof array!=="object") throw new TypeError('nao e objeto');
  if(typeof num!=="number") throw new TypeError('nao e numero');
  if(array.length!==num)throw new RangeError('tamanho inválido\n');
  return array;
}
catch(e)
{
  if(e instanceof ReferenceError)
  {
    console.log('erro do tipo ReferenceErro');
    console.log(e.message);
    
  }
   else if (e instanceof TypeError)
   {
     console.log('erro do tipo TypeErro');
     console.log(e.message);
  
   }
   else if (e instanceof RangeError)
   {
     console.log('erro do tipo RangeErro');
     console.log(e.message);
   
   }
   else console.log('tipo nao esperado\n'+ e);
}
}

console.log(validaarray([1,2,3,4,5], 5));
