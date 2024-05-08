//You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.
//Return an array containing all the possibilities you can reach substituing the ? for a value.
const possibilities = (str) => {  
  const result = [];
  const placeholderRegExp = /(\?)/;
  const zeros = str.replace(placeholderRegExp, '0');
  const ones = str.replace(placeholderRegExp, '1');

  
  if (zeros.includes('?')) {
    result.push(possibilities(zeros), possibilities(ones));
    return result.flat();
  }
  
  if (!zeros.includes('?')) {
    result.push(zeros, ones);
    return result;
  }
}
