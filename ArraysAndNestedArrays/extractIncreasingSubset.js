function extractSubset(arr){
    let biggestNumber = Number(arr[0]);
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= biggestNumber) {
            output.push(arr[i]);
            biggestNumber = arr[i];
        } 
    }
    return output;
}

/* let el = nums.splice(2, 1); // removes 1 element at index 2 */

extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);

console.log(`***************************************`);

extractSubset([1, 
    2, 
    3,
    4]);

console.log(`***************************************`); 

extractSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]);