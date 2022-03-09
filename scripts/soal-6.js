function getAngkaTerbesarKedua(dataNumbers) {
  let sortedNumber = dataNumbers
    .filter((value, index) => {
      return dataNumbers.indexOf(value) === index;
    })
    .sort(function (a, b) {
      return b - a;
    });

  return sortedNumber[1];
}

console.log(getAngkaTerbesarKedua([5, 5, 2, 3, 1, 4]));
