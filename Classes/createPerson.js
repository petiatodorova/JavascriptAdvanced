function createPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `Name: ${this.firstName} ${this.lastName} is ${this.age} old and has an email ${this.email}`;
        }
    }
    
    let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    console.log(person.toString());
    console.log(person instanceof Person);

}

createPerson();

