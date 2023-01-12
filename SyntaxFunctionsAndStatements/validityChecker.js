function validityChecker(x1, y1, x2, y2){
    function isitValid(a1, b1, a2, b2){
        let n = Math.pow((a2 - a1), 2);
        let m = Math.pow((b2 - b1), 2);
        let sentence = Math.sqrt(n + m);
    
        if (Math.pow(sentence, 2) === Math.ceil(Math.pow(sentence, 2))) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);
        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);
        }
    }

    isitValid(x1, y1, 0, 0);
    isitValid(x2, y2, 0, 0);
    isitValid(x1, y1, x2, y2);
}