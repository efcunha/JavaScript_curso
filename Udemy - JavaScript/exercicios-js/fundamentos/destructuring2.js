const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // n1 = 10, n3 = 9, n5 = undefined, n6 = 0
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; // nota = 6
console.log(nota);
