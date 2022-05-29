// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele

// semthis

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);

// com this

const abacate = {
  price: 2,
};

const uva = {
  price: 1.5,
};

function mapComThis(arr, thisArg) {
  return arr.map((item) => item * thisArg.price);
}

const nums = [1, 2];

console.log("this -> abacate", mapComThis(nums, abacate));

console.log("this -> uva", mapComThis(nums, uva));
