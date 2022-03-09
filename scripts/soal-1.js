function changeWord(selectedText, changedText, text) {
  if (typeof text !== "string") return;

  return text.replace(selectedText, changedText);
}

let myName = "Auriel Hari Rizkinanda";
console.log(changeWord("Hari", "Harlih", myName));
