//[1,2,0,3] => True
//# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

//[0,1,2,2,3] => False
//# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

//[0] => True
//# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

function isAllPossibilities(array){
    let newArr = [];
    let finish = array.length - 1

    for (let i = 0; i <= finish; i++) {
        newArr.push(i)
    }
    
    return newArr.every(item => array.includes(item)) 
}



