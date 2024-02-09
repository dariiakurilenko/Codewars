//Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

function filterHomogenous(arrays) {
   return arrays.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]))
}
