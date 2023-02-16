function createTempClass() {
    class TempClass {
        constructor(prop1, prop2, prop3, prop4) {
            this.prop1 = prop1;
            this.prop2 = prop2;
            this.prop3 = prop3;
            this.prop4 = prop4;
        }
        toString() {
            return `Name: ${this.prop1} ${this.prop2} is ${this.prop3} old and has an prop4 ${this.prop4}`;
        }
    }
    
    let tempClass = new TempClass('Anna', 'Simpson', 22, 'anna@yahoo.com');
    console.log(tempClass.toString());
    console.log(tempClass instanceof TempClass);
}

createTempClass();

