//"Hey fellow warriors"  --> "Hey wollef sroirraw" 
//"This is a test        --> "This is a test" 
//"This is another test" --> "This is rehtona test"

function spinWords(string){
    return string.split(' ').map(word => word.length > 4? word.split('').reverse().join(''): word).join(' ')
}
