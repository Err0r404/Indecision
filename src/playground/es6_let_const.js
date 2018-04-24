// ES5 + correct
var nameVar = 'Julien';
var nameVar = 'John';

console.log('nameVar ', nameVar);

// ES6 + cannot reassign let
let nameLet = 'Elaine';
// let nameLet = 'Jane';
nameLet = 'Jane';

console.log('nameLet ', nameLet);

// ES6 + cannot reassign or change const
const nameConst = 'Florent';
// const nameConst = 'Anon';
// nameConst = 'Anon';

console.log('nameConst ', nameConst);


// ES6 + let/const are scoped in curly braces where there are defined (not just function like var)
var fullName = "Julien Schmitt";
if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

var fullName = "Julien Schmitt";
let lastName;
if(fullName){
    lastName = fullName.split(' ')[1];
    console.log(lastName);
}
console.log(lastName);

