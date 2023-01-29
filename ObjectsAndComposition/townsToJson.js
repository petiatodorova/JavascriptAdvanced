function townsToJson(arr){
    let result = [];
    class Town {
        constructor(town, latitude, longitude){
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }  
    }

    for (let index = 1; index < arr.length; index++) {
        let array = arr[index].split('|').map(t => t.trim());
        let [town, latitude, longitude] = array.slice(1, 4);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let townObj = new Town(town, latitude, longitude);
        result.push(townObj);
    }

    return JSON.stringify(result);
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

console.log(`**************`);

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);