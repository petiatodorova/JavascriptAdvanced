function magicMatrices(arr){
    for (let row = 0; row < arr.length - 1; row++) {
        // sum by rows
        let rowSumOne = arr[row].reduce((acc, el) => acc + el);
        let rowSumTwo = arr[row + 1].reduce((acc, el) => acc + el);

        // sum by columns
        let colSumOne = 0;
        let colSumTwo = 0;
        for (let col = 0; col < arr.length; col++) {
            colSumOne += arr[row][col];
            colSumTwo += arr[row + 1][col];
        }
        if (rowSumOne !== rowSumTwo || colSumOne !== colSumTwo) {
            return false;
        }
    }
    return true;
}


console.log(magicMatrices([]));

console.log(`***********************`);

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));

console.log(`***********************`);

console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));