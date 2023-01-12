function roadRadar(speed, area){
    const motorwayLimit = 130;
    const interstateLimit = 90
    const cityLimit = 50;
    const residentialLimit = 20;

    let allowedSpeed = 0;

    switch (area) {
        case 'motorway':
            allowedSpeed = motorwayLimit;
            break;
        
        case 'interstate':
            allowedSpeed = interstateLimit;
            break;

        case 'city':
            allowedSpeed = cityLimit;
            break;

        case 'residential':
            allowedSpeed = residentialLimit;
            break;
    }

    let difference = speed - allowedSpeed;
    let status = '';
    

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
        return;
    } else if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')