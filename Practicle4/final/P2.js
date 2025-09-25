function reverseISBN(isbn) {
  try {
    if (typeof isbn !== "number" || isNaN(isbn)) {
      throw new Error("Invalid ISBN: Must be a number");
    }
    const sign = Math.sign(isbn);
    const reversed = parseInt(Math.abs(isbn).toString().split("").reverse().join(""));
    return sign * reversed;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function isBookIdPalindrome(id) {
  try {
    if (typeof id !== "number" || isNaN(id)) {
      throw new Error("Invalid Book ID: Must be a number");
    }

    const str = id.toString();
    return str === str.split("").reverse().join("");
  } catch (err) {
    return `Error: ${err.message}`;
  }
}
function isBookTitlePalindrome(title) {
  try {
    if (typeof title !== "string") {
      throw new Error("Invalid Title: Must be a string");
    }
    return title === title.split("").reverse().join("");
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function sqrtPages(pages) {
  try {
    if (typeof pages !== "number" || isNaN(pages)) {
      throw new Error("Invalid input: Must be a number");
    }
    if (pages < 0) {
      throw new Error("Negative numbers not allowed");
    }
    return Math.sqrt(pages);
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

const isPrimeShelf = (num) => {
  try {
    if (typeof num !== "number" || isNaN(num) || num < 2) {
      throw new Error("Invalid input: Must be an integer >= 2");
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  } catch (err) {
    return `Error: ${err.message}`;
  }
};
console.log(reverseISBN(-9876));    
console.log(isBookIdPalindrome(1221)); 
console.log(isBookTitlePalindrome("Level"));
console.log(sqrtPages(-400));       
console.log(isPrimeShelf(13));      
console.log(isPrimeShelf("abc"));   
