function validaArrays(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros!");

    if (typeof arr !== "object")
      throw new TypeError("Envie um elemento do tipo object!");

    if (typeof num !== "number")
      throw new TypeError("Envie um elemento do tipo Number!");

    if (arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("Outro tipo de erro!");
      console.log(e.message);
    }
  }
}

//console.log(validaArrays());
//console.log(validaArrays(5, 5));
console.log(validaArrays([1, 2, 3], 3));
