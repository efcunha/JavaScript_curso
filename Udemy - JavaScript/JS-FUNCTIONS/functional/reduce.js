const numbers = [1, 2, 3, 4, 5, 6]; 

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)
console.log(total)

const avg = (acc, el, i, Array) => {
    if (i === Array.length - 1) {
        return (acc + el) / Array.length
    }
    return acc + el
}

const result = numbers.reduce(avg)
console.log(result)