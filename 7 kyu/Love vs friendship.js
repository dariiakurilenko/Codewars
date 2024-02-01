//Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

function wordsToMarks(string){
    return [...string].reduce((sum, current) => sum + (current.charCodeAt()-96), 0)
}
