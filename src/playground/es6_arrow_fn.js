const square = function (x) {
    return x * x;
};
console.log(square(5));

const square_es6 = (x) => {
    return x * x;
};
console.log(square_es6(5));

const square_es6_v2 = (x) => x * x;
console.log(square_es6_v2(5));


// Challenge
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
const getFirstName_v2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Julien Schmitt'));
console.log(getFirstName_v2('Julien Schmitt'));
