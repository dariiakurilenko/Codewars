//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
   return arr.filter((item, pos) => arr.indexOf(item) == arr.lastIndexOf(item)).reduce((sum, current) => sum + current, 0)
};
