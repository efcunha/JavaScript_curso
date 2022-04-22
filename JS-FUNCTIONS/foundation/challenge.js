// Desafio
// Create a range function

function range(a, b, s = 1) { // a is the start, b is the end, s is the step
    const n1 = b === undefined ? 1 : a // if b is undefined, set n1 to 1
    const n2 = b === undefined ? a : b // if b is defined, set n2 to b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) // if n1 is less than or equal to n2, set step to s, otherwise set step to -s
    const nums = []; // create an array to store the numbers
    for(let i = n1; n1 <= n2 ? i <= n2: i >= n2; i += step) { // loop through the numbers
        nums.push(i); // push the numbers into the array
    }
    return nums // return the array
}

// range(5) -> [1, 2, 3, 4, 5]

console.log(range(5)); 

// range(6, 11) -> [6, 7, 8, 9, 10, 11]

console.log(range(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18]

console.log(range(10, 19, 2));

// range(6, 2) -> [6, 5, 4, 3, 2]

console.log(range(6, 2));

// range(8, -3, 4) -> [8, 4, 0]

console.log(range(8, -3, 4));
