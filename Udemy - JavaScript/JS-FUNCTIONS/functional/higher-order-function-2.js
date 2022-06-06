function finalPrice(tax, price) {
        return price * (1 + tax)
}

console.log(finalPrice(0.0875, 25.1));
console.log(finalPrice(0.0875, 25.7));
console.log(finalPrice(0.0875, 107.9));

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax);
    }
}

console.log(finalPrice(0.0875)(25.1));
console.log(finalPrice(0.0875)(25.7));
console.log(finalPrice(0.0875)(107.9));

// curring

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycfinalPrice = finalPrice(0.0825)

console.log(nycfinalPrice(25.1));
console.log(nycfinalPrice(25.7));
console.log(nycfinalPrice(107.9));
