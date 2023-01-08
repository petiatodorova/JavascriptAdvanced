function fruit(input){
    let fruitType = input[0];
    let weightInKg = Number(input[1])/1000;
    let pricePerKg = Number(input[2]);
    let money = weightInKg * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}