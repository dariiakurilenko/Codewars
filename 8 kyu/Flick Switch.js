//Create a function that always returns True/true for every item in a given list.
//However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr){
    let mySwitch = true
    let newArr = []

    for (let item of arr) {
        if (item === 'flick') {
            mySwitch = !mySwitch
            newArr.push(mySwitch)
        }else newArr.push(mySwitch)
    }
    return newArr;
}
