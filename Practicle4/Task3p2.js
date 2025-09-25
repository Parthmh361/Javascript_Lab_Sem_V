function sqrt(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Input must be a valid number");
  }
  if (num < 0) {
    throw new Error("Cannot calculate square root of -ve number");
  }
  return Math.sqrt(num);
}

try {
    console.log("Square root of -9:", sqrt(-9));
} catch (err) {
  console.log("Error:", err.message);
}
