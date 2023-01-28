function copyingArrays() {
    /* Copying Arrays */

    let original = [true, true, undefined, false, null];

    // slice
    let copy1 = original.slice(0);


    // spread operator
    let copy2 = [...original];
    console.log(copy1, copy2);


    // DEEP copying
    console.log(`DEEP copying`);
    let deepArray = [["freeCodeCamp"]];
    let deepCopy = JSON.parse(JSON.stringify(deepArray));

    // push to the inside array
    deepCopy[0].push("is great");
    console.table(deepArray);
    console.table(deepCopy);

    // push to the whole array
    deepCopy.push("more");
    console.table(deepCopy);
}

copyingArrays();