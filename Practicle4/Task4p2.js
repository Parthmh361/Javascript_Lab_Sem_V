const prime = (num) => {
  if (typeof num !== "number" || isNaN(num) || num < 2) {
    throw new Error("Input must be a number greater than 1");
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

try {
  console.log(prime(7));   
  console.log(prime(10));  
  console.log(prime("ajj"));
} catch (err) {
  console.log("Error:", err.message);
}
