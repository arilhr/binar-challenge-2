function checkTypeNumber(givenNumber) {
  if (typeof(givenNumber) === "undefined") return "Error: Bro where is the parameter?";
  if (typeof (givenNumber) !== "number") return "Error: invalid data type.";

  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

// TESTING
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

