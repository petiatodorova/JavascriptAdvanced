function sameNumbers(num){
    let isSame = true;
    let digits = num.toString();
    let numLength = digits.length;
       
    let sum = 0;
    let firstDigit = digits[0];
    for (let i = 0; i < digits.length; i++) {
        if (firstDigit !== digits[i]) {
            isSame = false;
        }
        sum += Number(digits[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(0);