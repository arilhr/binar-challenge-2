function getAngkaTerbesarKedua(dataNumbers) {
  if (typeof (dataNumbers) === "undefined") return "Error: parameter undefined.";

  let sortedNumber = dataNumbers
    .filter((value, index) => {
      return dataNumbers.indexOf(value) === index;
    })
    .sort(function (a, b) {
      return b - a;
    });

  return sortedNumber[1];
}

const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua());

