function sortByTwoCriteria(input) {
    input.sort((a, b) => (a.length - b.length || a.localeCompare(b)));
    input.forEach(element => {
        console.log(element);
    });
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']);

console.log(`**************************`);

sortByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);

console.log(`**************************`);

sortByTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']);