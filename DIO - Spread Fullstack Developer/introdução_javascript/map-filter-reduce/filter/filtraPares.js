function pares(arr) {
  if (!arr || !arr.length) return;

  const filteredArr = arr.filter((item) => item % 2 === 0);

  return filteredArr;
}

console.log(pares([1, 2, 3, 4]));
