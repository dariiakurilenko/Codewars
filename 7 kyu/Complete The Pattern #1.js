//You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//1
//22
//333
//....
//.....
//nnnnnn
function pattern(n){
    return (n<1)? '': Array(n).fill(n).map((_,i) => Array(++i).fill(i).join('')).join('\n')
}
