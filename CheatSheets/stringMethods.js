function stringMethods() {
    /* 20 String Methods */

    var stringOne = "freeCodeCamp is the best place to learn"
    var stringTwo = "frontend and backend development"

    // charAt() - returns the character on this position in the string
    console.log(`\n--- charAt`);
    console.log(stringOne.charAt(1))

    // charCodeAt() - returns the Unicode code of the character on this position
    console.log(`\n--- charCodeAt`);
    console.log(stringOne.charCodeAt(1))

    // concat() - concat stringTwo to stringOne
    console.log(`\n--- concat`);
    console.log(stringOne.concat(stringTwo))

    // endsWith() checks if the stringOne ends with the string or the character in the brackets
    console.log(`\n--- endsWith`);
    console.log(stringOne.endsWith('learn'))

    // fromCharCode() - returns the character with the Unicode in the brackets
    console.log(`\n--- fromCharCode`);
    console.log(String.fromCharCode(114))

    // includes() - true or false
    console.log(`\n--- includes`);
    console.log(stringTwo.includes("end"))

    // indexOf() - returns the position of the first occurrence of the word in the brackets or -1
    console.log(`\n--- indexOf`);
    console.log(stringTwo.indexOf("end"))

    // lastIndexOf() - returns the position of the last occurrence of the word in the brackets or -1
    console.log(`\n--- lastIndexOf`);
    console.log(stringTwo.lastIndexOf("end"))

    // match() - match to a regular expression
    console.log(`\n--- match`);
    console.log(stringTwo.match(/end/g))

    // repeat() - repeat N times (N is the number in the brackets)
    console.log(`\n--- repeat`);
    console.log(stringOne.repeat(3))

    // replace() - replace a match with string
    console.log(`\n--- replace`);
    console.log(stringTwo.replace(/end/g, "END"))

    // search() - return the position of the match
    console.log(`\n--- search`);
    console.log(stringTwo.search("end"))

    // slice() - returns a new string with characters from position from start to (end - 1)
    console.log(`\n--- slice`);
    console.log(stringTwo.slice(2, 4))

    // split() - returns an array of substrings, divides by the string in the brackets
    console.log(`\n--- split`);
    console.log(stringOne.split(" "))

    // startsWith() - true or false
    console.log(`\n--- startsWith`);
    console.log(stringOne.startsWith("free"))

    // substr() - substring starting at starting number 2, counting 4 characters
    console.log(`\n--- substr`);
    console.log(stringTwo.substr(2, 4))

    // substring() - similar to 'slice'
    console.log(`\n--- substring`);
    console.log(stringTwo.substring(2, 4))

    // toLowerCase()
    console.log(`\n--- toLowerCase`);
    console.log(stringOne.toLowerCase())

    // toUpperCase()
    console.log(`\n--- toUpperCase`);
    console.log(stringOne.toUpperCase())

    // trim() - trims whitespace from the beginning and end of the string
    console.log(`\n--- trim`);
    var stringThree = "     Subscribe now!      ";
    console.log(stringThree.trim())
}

stringMethods();