function diagonalAttack(input){
    let arr = arr.push(input.forEach(element => element.split(' ').map(Number)));
    // let sum = arr.reduce((acc, el) => acc + el);



    console.log(arr);
    // console.log(sum);
}

// diagonalAttack(['3 4 5 6']);

console.log(`***************************`);

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

console.log(`***************************`);

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);