function calorieObject(arr){
    let theObject = {};

    for (let i = 0; i < arr.length - 1; i+= 2) {
        theObject[arr[i]] = Number(arr[i + 1]);
    };
    console.log(theObject);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);