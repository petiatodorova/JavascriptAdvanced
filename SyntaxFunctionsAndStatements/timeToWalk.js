function timeToWalk(stepsCount, footprintLength, speed){
    let distanceInMeters = stepsCount * footprintLength;
    let timeInSeconds = Math.ceil(distanceInMeters / speed * 3.600);
    let delay = Math.floor(distanceInMeters / 500) * 60;
    let allTime = timeInSeconds + delay;
    let hours = convert(Math.floor(allTime / 3600));
    let minutes = convert(Math.floor((allTime - hours * 3600) / 60));
    let seconds = convert(allTime - hours * 3600 - minutes * 60);

    function convert(num){
        if (num.toString().length === 1 ) {
           return num = "0" + num;
        } else {
            return num;
        }
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}



timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);