function writeCards(nameArray, event) {
    let newArray = [];

    for (let i = 0; i < nameArray.length; i++) {
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}