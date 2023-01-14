function addAndRemoveElements(commands){
    let num = 1;
    let output = [];
    commands.forEach(element => {
        switch (element) {
            case 'add':
                output.push(num);
                num++;
                break;
            case 'remove':
                output.pop();
                num++
                break;
        }
    });
    if (output.length >= 1) {
        output.forEach(element => console.log(element));
    } else {
        console.log(`Empty`);
    }
}


addAndRemoveElements(['add', 
'add', 
'add', 
'add']);

console.log(`-----------------`);

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']);

console.log(`-----------------`);

addAndRemoveElements(['remove', 
'remove', 
'remove']); 