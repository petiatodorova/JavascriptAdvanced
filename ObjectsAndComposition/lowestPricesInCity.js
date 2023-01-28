function lowestPricesInCity(input) {
    let res = {};

    for (const el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (res.hasOwnProperty(product)) {
            let currentPrice = res[product]["price"];
            if (currentPrice > price) {
                res[product] = { town, price };
            }
        } else {
            res[product] = { town, price };
        }
    }

    console.log(JSON.stringify(res, null, "\t"));

    // Variant 1
    // for (const product in res) {
    //     let productName = product;
    //     let productLowestPrice = res[product].price;
    //     let townName = res[product].town;
    //     console.log(`${productName} -> ${productLowestPrice} (${townName})`);
    // }


    // Variant 2
    // for (const [key, value] of Object.entries(res)) {
    //     let productName = key;
    //     let productLowestPrice = value.price;
    //     let townName = value.town;
    //     console.log(`${productName} -> ${productLowestPrice} (${townName})`);
    // }


    // Variant 3
    for (const [key, value] of Object.entries(res)) {
        let productName = key;
        let productLowestPrice = value["price"];
        let townName = value["town"];
        console.log(`${productName} -> ${productLowestPrice} (${townName})`);
    }
}

lowestPricesInCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

