function isitValid(a1, b1, a2, b2){
    let n = Math.pow((a2 - a1), 2);
    let m = Math.pow((b2 - b1), 2);
    let sentence = Math.sqrt(n + m);

    if (Math.pow(sentence, 2) !== Math.floor(Math.pow(sentence, 2))) {
        console.log(`No`);
    } else {
        console.log(`Yes`);
    }
}

isitValid(0, 4, 0, 0)