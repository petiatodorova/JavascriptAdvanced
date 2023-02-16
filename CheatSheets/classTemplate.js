class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(value){ 
        if (typeof value != 'number') {
            throw new TypeError('Radius must be a number!');
        }
        this._radius = value;
    }

    get diameter(){
        return this._radius * 2;
    }

    set diameter(value){ 
        if (typeof value != 'number') {
            throw new TypeError('Diameter must be a number!');
        }
        this._radius = value / 2;
    }

    toString(){
        return `The radius is: ${this.radius} \nThe diameter is: ${this.diameter}`
    }
}

const myCircle = new Circle(4);
// const myCircle = new Circle('4');
myCircle.radius = 8;
console.log(myCircle.toString());
// myCircle.diameter = 'n';
myCircle.diameter = 8;

console.log(myCircle.radius);
console.log(myCircle.diameter);
