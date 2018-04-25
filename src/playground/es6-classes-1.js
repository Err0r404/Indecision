class Person {
    constructor(name = 'John Doe', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} ${this.age > 1 ? 'years': 'year'} old`;
    }
}

const me = new Person('Julien Schmitt', 30);
console.log(me.getGretting());
console.log(me.getDescription());

const anon = new Person();
console.log(anon.getGretting());
console.log(anon.getDescription());