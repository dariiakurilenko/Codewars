function countPositivesSumNegatives(arr){
    if (!arr|| !arr.length) return [];

    let positive = arr.filter(item => item > 0);
    let negative = arr.filter(item => item < 0);

    return [positive.length, negative.reduce((sum, current) => sum + current, 0)]
}
