//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

function capitals(str){
    let arr = [];
    let newStr = str.split('');
    for (let i = 0; i < str.length; i++){
        if (newStr[i] == newStr[i].toUpperCase()) {arr.push(i)}
    }
    return arr;
}
