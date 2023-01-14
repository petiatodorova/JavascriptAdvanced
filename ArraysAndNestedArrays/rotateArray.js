function rotateArray(arr, num){
    let output = arr;
    for (let i = 0; i < num; i++) {
        let lastElement = output.pop();
        output.unshift(lastElement);
    }
    console.log(output.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2);

console.log(`*************************************`);

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15); 