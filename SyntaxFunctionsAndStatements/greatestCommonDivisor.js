function greatestCommonDivisor(a, b){
    let gcd = a % b;

    while (true) {
        if (gcd === 0) {
            console.log(b);
            return;
        } else {
            a = b;
            b = gcd;
            gcd = a % b;
        }
    }
}

greatestCommonDivisor(2154, 458);