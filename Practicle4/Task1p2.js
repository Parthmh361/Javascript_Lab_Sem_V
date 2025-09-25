function reverseNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Invalid number input");
  }
  const sign = Math.sign(num);
  const reversed = parseInt(Math.abs(num).toString().split("").reverse().join(""));
  return sign * reversed;
}

try {
  console.log(reverseNumber("avevd")); 
} catch (err) {
  console.log("Error:", err.message);
}
