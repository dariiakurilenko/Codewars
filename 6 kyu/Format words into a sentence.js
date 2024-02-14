//['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"

function formatWords(words){
    if (!words || words.length === 0) {
        return '';
    }
    
    const validWords = words.filter(word => word !== '');
    
    if (validWords.length === 0) {
        return '';
    }
    
    if (validWords.length === 1) {
        return validWords[0];
    }
    
    const lastWord = validWords.pop();
    
    return validWords.join(', ') + ' and ' + lastWord;
}
