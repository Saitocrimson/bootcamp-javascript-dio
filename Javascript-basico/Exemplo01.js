function returnEvenValues(array)
{
  let num=[];
  for(var i = 0; i<array.length; i++)
  {
    
    if  (array[i] % 2 ===0)
    {
      num.push(array[i]);
    }
  }
  console.log(num);
}

let array =[1,2,3,4,5];
returnEvenValues(array);
