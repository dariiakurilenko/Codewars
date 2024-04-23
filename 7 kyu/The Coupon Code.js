//Your online store likes to give out coupons for special occasions. 
//Some customers try to cheat the system by entering invalid codes or using expired coupons.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let curDate = new Date(currentDate)
    let expDate = new Date(expirationDate)

    return (enteredCode === correctCode && curDate <= expDate)? true: false;
    
}
