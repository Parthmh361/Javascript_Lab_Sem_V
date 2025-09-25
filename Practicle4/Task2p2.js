function isPalindromeString(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
try {
  let input = 123
  if (isPalindromeString(input)) {
    console.log(`"${input}" is a palindrome`);
  } else {
    console.log(`"${input}" is NOT a palindrome`);
  }
} catch (err) {
  console.log("Error:", err.message);
}
