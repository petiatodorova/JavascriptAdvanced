function storeCatalogue(arr) {
    let obj = {};
    /* 
    {letter A: {
        Appricot: 20.4, 
        Apple: 1.25
    }}
    */

    for (const line of arr) {
        let [product, price] = line.split(' : ');
        let letter = product[0];

        if(!obj.hasOwnProperty(letter)){
            obj[letter] = {};
        }
        obj[letter][product] = price;
    }
    let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const letter of sortedLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}

storeCatalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']);

// console.log(`**************`);

// storeCatalogue(
//     ['Banana : 2',
//         "Rubic's Cube : 5",
//         'Raspberry P : 4999',
//         'Rolex : 100000',
//         'Rollon : 10',
//         'Rali Car : 2000000',
//         'Pesho : 0.000001',
//         'Barrel : 10']);