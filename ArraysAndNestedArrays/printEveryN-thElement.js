function printNthElement(arr, num){
    let output = [];
    for (let i = 0; i < arr.length; (i += Number(num))) {
        output.push(arr[i]);
    }
    return output;
}

printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2);
