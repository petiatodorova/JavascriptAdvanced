function forExamples() {
    // Objects
    let obj = { "name": "Jake", "level": 1000, "items": ["Gauss", "HolidayGrenade"] };

    // 'for...in' used for Object returns it's properties (key) and their values (obj[key]) as strings
    for (const key in obj) {
        // property
        console.log(`key (the property) \n--> ${key}`);

        // value
        console.table(`value for property ${key} \n--> ${obj[key]}`);
    }

    // hasOwnProperty example
    console.log(obj.hasOwnProperty('name'));

    // ****************************************************************
    // Arrays
    let arr = [22, 29, 39];

    // 'for...in' used for Array returns it's indexes as strings
    let sum = 0;
    for (const i in arr) {
        console.log(`index is ${i}`);
        sum += Number(i);
        console.log(sum);
    }

    // 'for...of' used for Array returns the values of the array
    for (const iterator of arr) {
        console.log(iterator);
    }

    // 'for' used for Array returns the indexes and the values of the index positions
    for (let index = 0; index < arr.length; index++) {
        console.log(`index is --> ${index}`);
        console.log(`the value on position ${index} is ${arr[index]}`);
    }

    // In array hasOwnProperty can be used for index check - example
    console.log(arr.hasOwnProperty(1));
}

forExamples();

