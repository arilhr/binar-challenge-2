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
