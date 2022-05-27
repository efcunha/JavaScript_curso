function uniqueElements(array) {
  let unique = new Set(array);
  return [...unique]; // spread operator
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));
