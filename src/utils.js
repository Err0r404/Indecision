console.log('utils.js is loaded');

// Inline named export
export const square = (x) => x * x;

// Inline named export
export const add = (a, b) => a + b;

// Inline default export
const subtract = (a, b) => a - b;
export default subtract;

// Named exports
// export {square, add};

// Default exports
// export {square, add, subtract as default};