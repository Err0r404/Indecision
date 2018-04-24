// arguments object exist
const add = function (a, b) {
    console.log('arguments ', arguments);
    return a + b;
};
// console.log(add(5,6));

// arguments object DOESN'T exist
const add_es6 = (a, b) => {
    // console.log('arguments ',arguments);
    return a + b;
};
// console.log(add_es6(5,6));


const user = {
    name: 'Julien',
    cities: ['Juvignac', 'Montpellier', 'Belfort'],
    printCities: function () {
        // console.log(this.name);
        // console.log(this.cities);

        // Doesn't work because 'this' scope
        this.cities.forEach(function (city) {
            // console.log(this.name, city);
        });

        // Workaround for ES5
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name, city);
        });

        // Work because ES6 scope with arrow function
        this.cities.forEach((city) => {
            console.log(this.name, city);
        });
    },
    printCities_v2() {
        return this.cities.map((city) => {
            // console.log(this.name, city);
            return city + '!';
        });
    }
};
// user.printCities();
// console.log(user.printCities_v2());

// Challenge
const multipliers = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return number*this.multiplyBy;
        });
    }
};
console.log(multipliers.multiply());