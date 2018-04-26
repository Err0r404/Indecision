class Person {
    constructor(name = 'John Doe', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} ${this.age > 1 ? 'years' : 'year'} old`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        // !'' => true
        // !!'' => false
        // !!'Julien' => true
        // !!undefined => false
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` and his major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` You are from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Student('Julien Schmitt', 30, 'Computer Science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const anon = new Student();
console.log(anon);
console.log(anon.getGreeting());
console.log(anon.getDescription());

const her = new Traveler('Elaine Lam', 27, 'Hong-Kong');
console.log(her);
console.log(her.getGreeting());
console.log(her.getDescription());

const anonymous = new Traveler();
console.log(anonymous);
console.log(anonymous.getGreeting());
console.log(anonymous.getDescription());
