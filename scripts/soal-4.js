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
