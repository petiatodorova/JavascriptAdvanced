function heroicInventory(input){
    let result = [];
    for (const iterator of input) {
        let name, level, items;
        [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }
    result = JSON.stringify(result);
    return result;
}

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);