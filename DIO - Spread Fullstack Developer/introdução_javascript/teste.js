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

