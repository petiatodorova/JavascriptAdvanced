function objects() {
    // JS Nuggets: Objects

    let myCar = new Object();
    myCar.make = "Ford";
    myCar.model = "Mustang";
    myCar.color;
    console.log(myCar.make);
    console.log(myCar.color);

    myCar["year"] = 1969;
    console.log(myCar["model"])

    myCar["Do I like?"] = "I hate my car.";
    console.log(myCar["Do I like?"]);



    function showProps(obj, objName) {
        let result = "";
        for (let i in obj) {
            // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
            if (obj.hasOwnProperty(i)) {
                result += objName + "." + i + " = " + obj[i] + "\n";
            }
        }
        return result;
    }
    console.log(showProps(myCar, "myCar"));

    // Creation: object initializer
    let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };

    // Creation: constructor function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    let mycar = new Car("Chevy", "Malibu", 1993);
    let anothercar = new Car("Mazda", "Miata", 1990);
    console.log(mycar.model);
    mycar.color = "black";
    console.log(mycar.color);

    // Creation: Object.create
    let Animal = {
        type: "Invertebrates",
        displayType: function () {
            console.log(this.type);
        }
    }

    let animal1 = Object.create(Animal);
    animal1.displayType();

    let fish = Object.create(Animal);
    fish.type = "Fishes";
    fish.displayType();

}
objects();