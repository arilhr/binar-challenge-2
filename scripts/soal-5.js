function getSplitName(personName) {
  if (typeof (personName) === "undefined") return "Error: parameter undefined.";
  if (typeof (personName) !== "string") return "Error: Invalid Type.";
  if (personName.length === 0) return "Error: no characters.";

  let splitName = personName.split(" ").filter((item) => {
    return item.length > 0;
  });

  let resultName = {
    firstName: null,
    middleName: null,
    lastName: null
  };

  if (splitName.length > 3) {
    return "Error: This function for 3 characters only.";
  }

  resultName.firstName = splitName[0];
  if (splitName.length === 3) {
    resultName.middleName = splitName[1];
    resultName.lastName = splitName[2];
  } else if (splitName.length === 2) {
    resultName.lastName = splitName[1];
  }

  return resultName;
}

//TESTING
console.log(getSplitName("Auriel Harlih Rizkinanda"));
console.log(getSplitName("Auriel Harlih"));
console.log(getSplitName("Auriel"));
console.log(getSplitName("Uzumaki Auriel Harlih Rizkinanda"));
console.log(getSplitName(0));
