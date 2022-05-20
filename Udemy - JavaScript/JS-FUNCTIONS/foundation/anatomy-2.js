// Anonimous function

//function (a, b, c){
//    return a + b + c;
//}

(function (a, b, c){
    return a + b + c;
})

// Function expression

const x = 1
const sum = function (a, b, c){
    return a + b + c;
}

sum(1, 2, 3)

const result = sum(1, 2, 3)
console.log(result)

const anotherSum = sum
console.log(anotherSum(1, 2, 3))

