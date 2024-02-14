function removeDuplicateWords (s) {
    const newStr = s.split(',').join(',').split(' ')
    const uniqueWords = [...new Set(newStr)]

    return uniqueWords.join(' ')
}
