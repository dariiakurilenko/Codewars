//Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
//Like this:

//n = 5

//[
  //'-----',
  //'-   -',
  //'-   -',
  //'-   -',
  //'-----'
//]

function box(n){
   let result= [];
   for (let i = 1;i <= n;i++){
   if (i > 1 && i < n){result.push('-' + ' '.repeat(n-2) + '-')}
   if (i === 1){result.push('-'.repeat(n))}
   if (i===n){result.push('-'.repeat(n))}
   }
   return result;
 }
