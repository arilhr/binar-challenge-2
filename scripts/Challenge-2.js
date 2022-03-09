// 1
function changeWord(selectedText, changedText, text) {
  if (typeof text !== "string") return;

  return text.replace(selectedText, changedText);
}

let myName = "Auriel Hari Rizkinanda";
console.log(changeWord("Hari", "Harlih", myName));

// 2
function checkTypeNumber(givenNumber) {
  if (typeof givenNumber !== "number") return "Error: invalid data type.";

  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(3));

// 3
function checkEmail(email) {
  if (typeof email !== "string") return "Error: Invalid data type.";

  const EMAIL_REGEX = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  if (EMAIL_REGEX.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("sda!@gmail.com"));

// 4
function isValidPassword(pass) {
  if (typeof pass !== "string") return "Error: Invalid data type.";

  const LOWER_REGEX = /[a-z]/g;
  const UPPER_REGEX = /[A-Z]/g;
  const DIGIT_REGEX = /\d/g;

  return (
    pass.length > 8 &&
    LOWER_REGEX.test(pass) &&
    UPPER_REGEX.test(pass) &&
    DIGIT_REGEX.test(pass)
  );
}

console.log(isValidPassword("passworD123"));

// 5
function getSplitName(personName) {
  if (typeof personName !== "string") return "Error: Invalid Type.";
  if (personName.length === 0) return "Error:no characters.";

  let splitName = personName.split(" ").filter((item) => {
    return item.length > 0;
  });

  let resultName = {
    firstName: null,
    middleName: null,
    lastName: null,
  };

  if (splitName.length > 3) {
    return "Error: This function for 3 characters only.";
  }

  resultName.firstName = splitName[0];
  if (splitName.length > 2) {
    resultName.middleName = splitName[1];
    resultName.lastName = splitName[2];
  } else {
    resultName.lastName = splitName[1];
  }

  return resultName;
}

console.log(getSplitName("Auriel Harlih Rizkinanda"));

// 6
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

// 7
function getTotalPenjualan(datas) {
  let totalPenjualan = 0;

  datas.forEach((data) => {
    totalPenjualan += data.hargaSatuan * data.totalTerjual;
  });

  return totalPenjualan;
}

// 8
function getInfoPenjualan(datas) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris = "";
  let jumlahProdukTerlaris = 0;
  let penulisTerlaris = "";
  let jumlahPenulisTerlaris = 0;

  datas.forEach((data) => {
    // get total keuntungan
    totalKeuntungan += data.hargaJual * data.totalTerjual;

    // get total modal
    totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);

    // check produk terlaris
    if (data.totalTerjual > jumlahProdukTerlaris) {
      produkTerlaris = data.namaProduk;
      jumlahProdukTerlaris = data.totalTerjual;
    }

    // check penulis terlaris
    let banyakProdukPenulisTerjual = 0;
    datas.forEach((item) => {
      if (item.penulis === data.penulis) {
        banyakProdukPenulisTerjual += item.totalTerjual;
      }
    });

    if (banyakProdukPenulisTerjual > jumlahPenulisTerlaris) {
      penulisTerlaris = data.penulis;
      jumlahPenulisTerlaris = banyakProdukPenulisTerjual;
    }
  });

  return {
    totalKeuntungan: "Rp. " + totalKeuntungan,
    totalModal: "Rp. " + totalModal,
    persentaseBukuTerlaris: (totalModal / totalKeuntungan) * 100 + "%",
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisTerlaris,
  };
}
