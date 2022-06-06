/*
* A programming language is said to have 
* first-class functions when functions in
* that language can be treated like any other
* variable.
*/

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = (x, y) => x = y // x = y is the same as x *= y

const divide = (x, y) => x / y // x / y is the same as x /= y

console.log(add(10, 20)); // 30
console.log(subtract(10, 20)); // -10
console.log(multiply(10, 20)); // 20
console.log(divide(10, 20)); // 0.5
