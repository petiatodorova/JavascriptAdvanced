function arrayIteration() {
    // JS Nuggets
    // Array iteration: 8 methods

    // forEach - returns item and it's index
    console.log('---forEach example:');
    let arr = [1, 2, 3];
    arr.forEach(function (item, index) {
        console.log(item, index);
    });


    // map - returns another array with function applied to every item
    console.log('\n---map example:');
    arr = [1, 2, 3];
    let doubled = arr.map(function (item) {
        return item * 2;
    });
    console.log(doubled);


    // filter - returns only items which are true for the condition item % 2 === 0
    // filters the array with the condition of the function
    console.log('\n---filter example:');
    arr = [1, 2, 3];
    let evens = arr.filter(function (item) {
        return item % 2 === 0;
    });
    console.log(evens);


    // reduce
    console.log('\n---reduce example:');
    let sum = [1, 2, 3].reduce(function (result, item) {
        return result + item;
    }, 0);
    console.log(sum)


    // some - is there any item for which the condition is true
    console.log('\n---some example:');
    let hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
        return item < 0;
    });
    console.log(hasNegativeNumbers);


    // every - the condition should be true for all the items
    console.log('\n---every example:');
    let allPositiveNumbers = [1, 2, -3].every(function (item) {
        return item > 0;
    });
    console.log(allPositiveNumbers);


    // find - returns the item
    console.log('\n---find example:');
    let objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    let found = objects.find(function (item) {
        return item.id === 'b';
    });
    console.log(found);


    // find index - returns the index
    console.log('\n---find index example:');
    let objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    let foundIndex = objects2.findIndex(function (item) {
        return item.id === 'b';
    });
    console.log(foundIndex)

}
arrayIteration();