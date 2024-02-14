function deleteDigit(n) {
    const numStr = n.toString();
    let arr = []
    
    for (let i = 0; i < numStr.length; i++) {
        const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
        arr.push(currentNum)
    }
    
    return Math.max(...arr);
}
