function cookingByNumbers(num, op1, op2, op3, op4, op5){
    let result = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                result /= 2;
                console.log(result);
                break;

            case 'dice':
                result = Math.sqrt(result);
                console.log(result);
                break;

            case 'spice':
                result += 1;
                console.log(result);
                break;

            case 'bake':
                result *= 3;
                console.log(result);
                break;

            case 'fillet':
                result = 0.8 * result;
                console.log(result);
                break;                
        }
    }
}

//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');