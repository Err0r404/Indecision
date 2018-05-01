// import './utils';
import {square, add} from "./utils";
import {isAdult, canDrink} from "./person";

console.log('app.js is running');

// utils.js
console.log(square(3));

console.log(add(3, 1));

// person.js
console.log('isAdult(17)', isAdult(17));
console.log('isAdult(18)', isAdult(18));
console.log('isAdult(19)', isAdult(19));

console.log('canDrink(20)', canDrink(20));
console.log('canDrink(21)', canDrink(21));
console.log('canDrink(22)', canDrink(22));