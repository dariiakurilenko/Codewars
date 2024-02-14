function isValidIP(str) {
    let normalIp = str.split(',').join(',').split('.').filter(a => a != '' && a[1]!='e')
    let count = 0
    if (normalIp.length == 4) {
        for (let i = 0; i < normalIp.length; i++) {
            if (normalIp[i] > 0 && normalIp[i] <= 255 && normalIp[i][0] !=='0'){
                count +=1
            }
        }
    }
    

    return count == 4? true: false
}
