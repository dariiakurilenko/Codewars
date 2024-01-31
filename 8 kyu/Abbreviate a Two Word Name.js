function abbrevName(name){
    let [firstName, secondName] = name.split(' ');
    return firstName[0].toUpperCase() + '.' + secondName[0].toUpperCase();
}
