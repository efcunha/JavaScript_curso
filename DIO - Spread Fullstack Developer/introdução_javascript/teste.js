/*
var preco = 2;
var desconto  = 0.2;
const PRECO = 2; // Os valores de contant são imutaveis 
var total = PRECO - desconto; */

// Função

/* 
function soma(a, b) {
  return a + b; //8
}
soma(3, 5);
console.log("Hello world!!") 
*/

/* 
function returnEvenValues(array){
  let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
        evenNums.push(array[i]);
        } else {
          console.log(`${array[i]} não é par!`);
        }
    }
    console.log('os números pares são:',evenNums);
}
let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array); 
*/

// Hoisting function

/* 
numberOne = 1;
console.log(numberOne + 2);
var numberOne;

// Este é para dar erro
numberOne = 1;
console.log(numberOne + 2);
let numberOne; 

let numberOne;
numberOne = 1;
console.log(numberOne + 2); 
*/

// variaveis

/*
var firstName = 'John'; // escopo global
var lastName = 'Doe'; // escopo global

if(firstName === 'John'){
  var firstName = 'Jane'; // escopo global
  let lastName = 'Doe'; 
  lastName = 'Mané'; // alterando o escopo global
  console.log(firstName + ' ' + lastName);
}

console.log(firstName + ' ' + lastName);
*/

// Contantes
// Constante não pode ser redeclarada
/*
const FIRST_NAME = 'John';
console.log(FIRST_NAME);
*/

// Tipos de Função

// Função anonima
/*
const soma = function (a, b) {
  return a + b;
}

soma(3, 5);
soma(1, 2);

console.log(soma(1, 2));
console.log(soma(3, 5));
*/

// Função autoinvocavel
/*
(
  function() {
    let name = "Digital Innovation One";
    return name
  }
)();

(
  function(a, b) {
    return a + b;
  }
)(1, 2);

const soma3 = (
  function() {
      return a + b;
    }
)(1, 2);
*/

// Função Callbacks
/*
const calc = function(operacao, num1, num2){
  return operacao(num1, num2)
}
const soma = function(num1, num2){
  return num1 + num2;
}
const sub = function(num1, num2){
  return num1 - num2;
}
const resultSoma = calc(soma,1, 2);
const resultSub = calc(sub, 2, 1);

console.log(resultSub);
console.log(resultSoma);
*/

// Parametros padrão

// Array

// Spread
/*
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
*/
// Rest
/*
function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3, 4, 5);
*/
// Destructuring
/*
const user = {
  id: 42,
  displayName: "John Doe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}

userId(user);

getFullName(user);
*/

// Loops
// if/else

// Forma 1
/*
function numeroPositivo(num) {
  let resultado;

  if (num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

numeroPositivo(2);
numeroPositivo(-2);

// Forma 2

function numeroPositivo(num) {
  let resultado;

  const ehNegativo = num < 0;

  if (ehNegativo) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

// Forma 3

function numeroPositivo(num) {
  const ehNegativo = num < 0;

  if (ehNegativo) {
    return false;
  }
  return true;
}

function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if (ehNegativo) {
    return "Esse número é negativo!";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que 10!";
  }
  return "Esse número é positivo";
}

numeroPositivo(2);
numeroPositivo(-2);
numeroPositivo(40);

// Switch/case

function getAnimal(id) {
  switch (id) {
    case 1:
      return "Cachorro";
    case 2:
      return "Gato";
    case 3:
      return "Pássaro";
    default:
      return "Não encontrado";
  }
}

getAnimal(1); // Cachorro
getAnimal(3); // Pássaro
getAnimal("1"); // Não encontrado
*/

// For
/*
function multiplicaPorDois(arr) {
  let multiplicados = [];

  for (let i = 0; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2);
  }
  return multiplicados;
}
const meusNumeros = [2, 33, 456, 356, 40];
multiplicaPorDois(meusNumeros);
// [4, 66, 912, 712, 80]

// For..in

function forInExemplo(obj) {
  for (let prop in obj) {
    console.log(prop, obj[prop]);
  }
}

const meuObjeto = {
  nome: "John",
  idade: 30,
  cidade: "São Paulo",
};

forInExemplo(meuObjeto);
// nome John
// idade 30
// cidade São Paulo

// For...of

function logLetras(palavras) {
  for (let letra of palavras) {
    console.log(letra);
  }
}

const palavras = ["John", "Doe", "Jane"];
logLetras(palavras);
// J
// o
// n

// while

function exemploWhile() {
  let num = 0;
  while (num < 10) {
    console.log(num);
    num++;
  }
}

exemploWhile();

// Do...while

function exemploWhile() {
  let num = 0;
  do {
    console.log(num);
    num++;
  } while (num <= 10);
}

exemploWhile();
*/
