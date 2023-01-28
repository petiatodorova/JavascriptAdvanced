// for...in example
function forExamples() {
    // // Objects
    // let obj = { "name": "Jake", "level": 1000, "items": ["Gauss", "HolidayGrenade"] };
    // for (const key in obj) {
    //     // property
    //     console.log(key);

    //     // value
    //     console.log(obj[key]);
    // }

    // // hasOwnProperty example
    // console.log(obj.hasOwnProperty('name'));

    // // ****************************************************************
    // Arrays
    let arr = [22, 29, 39];

    // 'for...in' used for Array returns it's indexes as strings
    let sum = 0;
    for (const i in arr) {
        console.log(i);
        sum += Number(i);
        console.log(sum);
    }

    // 'for...of' used for Array returns the values on these index position
    for (const iterator of arr) {
        console.log(iterator);
    }

    // In array hasOwnProperty can be used for index check - example
    console.log(arr.hasOwnProperty(1));
}

forExamples();

