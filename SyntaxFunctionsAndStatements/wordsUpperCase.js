function wordsUp(input){
    const regex = /\w+/gi;
    let found = input.match(regex);
    let uppercase = found.map(element => element.toUpperCase())

    console.log(uppercase.join(', '));
}

wordsUp(`Hi, how are you?`)
wordsUp(`hello`)
