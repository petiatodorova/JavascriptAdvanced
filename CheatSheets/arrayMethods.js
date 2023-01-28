function arrayMethods() {
    // JS Nuggets: 10 Common Array Methods

    let arr = ["a", "b", "c"];

    arr.push("d");
    console.log(arr);

    console.log(arr.pop());
    console.log(arr);

    let arr2 = ["g", "q"];
    console.log(arr.concat(arr2));
    console.log(arr2);

    console.log(arr.join("!"));

    console.log(arr.reverse());
    console.log(arr);

    console.log(arr.shift());
    console.log(arr);

    console.log(arr.unshift("p"));
    console.log(arr);

    console.log(arr.slice(1, 3));

    arr.push("i");
    arr.push("f");
    console.log(`sorting`);
    arr.sort();
    console.log(arr);

    // 'splice' modifies the original array
    console.log(`splice`);
    console.log(`The original array is [${arr}]`);
    //returns an array with the elements which will be removed;
    let removedElements = arr.splice(2, 2, "JS Nuggets");
    console.log(`The removed elements are [${removedElements}]`);
    console.log(`After splice the array is [${arr}]`);
}

arrayMethods();