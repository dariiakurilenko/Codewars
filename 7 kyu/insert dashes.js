//Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
//Note that the number will always be non-negative (>= 0).

function insertDash(num) {
   let newNum = num.toString().split('');
   let newArr = []
   
   for (let i = 0; i < newNum.length; i++){
      newArr.push(newNum[i]);
      if (newNum[i] % 2 !==0 && newNum[i+1] % 2 !==0){
         newArr.push('-')
      }
   }
   if (newArr[newArr.length - 1] == '-'){
      newArr.pop('-')
   }

   return newArr.join('');
}
