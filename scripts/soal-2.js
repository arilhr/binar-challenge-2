function checkTypeNumber(givenNumber) {
  if (typeof givenNumber !== "number") return "Error: invalid data type.";

  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(3));
