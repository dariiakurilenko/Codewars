function isValidIP(str) {
    const octets = str.split('.');
    
    // Проверяем количество октетов
    if (octets.length !== 4) {
        return false;
    }

    // Проверяем каждый октет
    for (let i = 0; i < octets.length; i++) {
        const octet = octets[i];
        
        if (octet.length === 0 || octet.length > 3) {
            return false;
        }

        if (octet[0] === '0' && octet.length > 1) {
            return false;
        }

        if (!/^\d+$/.test(octet)) {
            return false;
        }

        const num = +octet;
        if (num < 0 || num > 255) {
            return false;
        }
    }

    return true;
}
