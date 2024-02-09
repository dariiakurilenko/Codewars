//A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

function findMagic(arr){
   for (let i = 0; i < arr.length; i++) {
      if (i == arr[i]) return arr[i];
   }
   return -1;
}
