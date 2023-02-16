class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;

        return Math.sqrt(dx**2 + dy**2);
    }

    toString(){
        return `The point has coordinates x: ${this.x} and y: ${this.y}`
    }
    
    get makeString(){
        return `${point1} Make it string coordinates x: ${this.x} and y: ${this.y}`
    }
}

let point1 = new Point(1, 2);
let point2 = new Point(4, 5);
let point3 = new Point(6, 7);
let arrPoints = [point1, point2, point3];
console.log(Point.distance(point1, point2).toFixed(2));
console.log(`The point1 is ${point1}`);
console.log(point1);
console.log(point1.toString());
console.log(point1.makeString);
console.log(arrPoints.join('\n'));
