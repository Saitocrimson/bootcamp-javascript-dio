function pares(array){
  if(!array)return -1;
  if(!array.length) return -1
  for(var i=0;i<array.length;i++)
  {
    if (array[i]===0) console.log('vc e zero\n');
    else if(array[i]%2==0){console.log(`substituindo ${array[i]} por 0`);array[i]=0;}
    
    
  }
  
}
var array=[1,2,8,0,120];

pares(array);
console.log(array);
