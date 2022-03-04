function changeWord(selectedText, changedText, text) {
  if (typeof text !== "string") return;

  return text.replace(selectedText, changedText);
}

let test = "Halo user!";

console.log(changeWord("user", "aril", test));
