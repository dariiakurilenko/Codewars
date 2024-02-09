//Several people are standing in a row divided into two teams.
//The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

function rowWeights(array){
   let even = [];
   let odd = [];

   for (let i = 0; i < array.length; i++){
      if ( i % 2 == 0){
         even.push(array[i]);

      }else{
         odd.push(array[i]);
      }       
   }
   return [even.reduce((sum, current) => sum + current, 0), odd.reduce((sum, current)=> sum + current, 0)]
}
