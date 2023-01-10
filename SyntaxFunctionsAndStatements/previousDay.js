function previousDay(year, month, day){
    let theDate = new Date(year, month - 1, day);
    theDate.setDate(theDate.getDate() - 1);
    console.log(`${theDate.getFullYear()}-${theDate.getMonth() + 1}-${theDate.getDate()}`);
}

previousDay(2015, 5, 10);

