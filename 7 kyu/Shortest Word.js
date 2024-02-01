//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(str) {
    return Math.min(...str.split(' ').map(item => item.length));
}
