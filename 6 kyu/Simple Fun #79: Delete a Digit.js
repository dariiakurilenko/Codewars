function deleteDigit(n) {
    const numStr = n.toString();
    let maxNum = 0;
    
    for (let i = 0; i < numStr.length; i++) {
        const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
    }
    
    return maxNum;
}
