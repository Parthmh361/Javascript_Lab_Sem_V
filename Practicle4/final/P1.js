const bookCount = 2;
function getThickerBook(pages1, pages2){
    if (pages1 > pages2){
        return "Book 1 is thicker";
    } else if (pages1 < pages2) {
        return "Book 2 is thicker";
    } else {
        return "Both books have the same thickness";
    }
}
const bookFactorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * bookFactorial(n - 1);
};
const checkLibraryNote = (str) => {
   return str.includes("Library");
};
function secretShelf(password) {
  const note = "(Rare Book Note)";
  return function(inputPassword) {
    if (inputPassword === password) {
      return note;
    } else {
      return "Access Denied";
    }
  };
}
console.log(getThickerBook(120, 350));
console.log("Factorial of 5:", bookFactorial(5));
console.log("Library Note Check:", checkLibraryNote("Library book is due"));
const shelf = secretShelf("abcd");
console.log(shelf("xyz"));
console.log(shelf("abcd"));