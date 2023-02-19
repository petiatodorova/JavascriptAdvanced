function arrayMethods() {
    // JS Nuggets: 10 Common Array Methods

    let arr = ["a", "b", "c"];

    console.log('---> push');
    arr.push("d");
    console.log(arr);

    console.log('---> pop');
    console.log(arr.pop());
    console.log(arr);

    console.log('---> concat');
    let arr2 = ["g", "q"];
    console.log(arr.concat(arr2));
    console.log(arr2);

    console.log('---> join');
    console.log(arr.join("!"));

    console.log('---> reverse');
    console.log(arr.reverse());
    console.log(arr);

    console.log('---> shift');
    console.log(arr.shift());
    console.log(arr);

    console.log('---> unshift');
    console.log(arr.unshift("p"));
    console.log(arr);

    console.log('---> slice');
    console.log(arr);
    console.log(arr.slice(1, 3));

    console.log('---> sort');
    arr.push("i");
    arr.push("f");
    console.log(`sorting`);
    arr.sort();
    console.log(arr);

    console.log('---> splice');
    // 'splice' modifies the original array
    console.log(`splice`);
    console.log(`The original array is [${arr}]`);
    // returns an array with the elements which will be removed;
    let removedElements = arr.splice(2, 2, "JS Nuggets");
    console.log(`The removed elements are [${removedElements}]`);
    console.log(`After splice the array is [${arr}]`);

    function sortByTwoCriteria(input) {
        input.sort((a, b) => (a.length - b.length || a.localeCompare(b)));
        input.forEach(element => {
            console.log(element);
        });
    }
    
    sortByTwoCriteria(['alpha', 
    'beta', 
    'gamma']);function sortByTwoCriteria(input) {
    input.sort((a, b) => (a.length - b.length || a.localeCompare(b)));
    input.forEach(element => {
        console.log(element);
    });
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']);
}

arrayMethods();