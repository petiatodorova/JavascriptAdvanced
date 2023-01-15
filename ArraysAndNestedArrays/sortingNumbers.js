function sortingNumbers(arr){
    let output = [];
    while (true) {
        arr.sort((a, b) => a - b);
        output.push(arr[0]);
        arr.shift();
        if (arr.length <= 0) {
            break;
        } else {
            arr.sort((a, b) => b - a);
            output.push(arr[0]);
            arr.shift();
            if (arr.length <= 0) {
                break;
            }
        }
    }
    return output;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);