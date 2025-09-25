function compareBooks() {
  try {
    const book1 = prompt("Enter first book title:");
    const pages1 = parseInt(prompt("Enter number of pages in first book:"));

    const book2 = prompt("Enter second book title:");
    const pages2 = parseInt(prompt("Enter number of pages in second book:"));

    if (isNaN(pages1) || isNaN(pages2)) throw new Error("Pages must be numbers.");

    if (pages1 > pages2) return `${book1} has more pages.`;
    if (pages2 > pages1) return `${book2} has more pages.`;
    return "Both books have the same number of pages.";
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function factorialTicket() {
  try {
    const num = parseInt(prompt("Enter a number to generate Ticket ID:"));
    if (isNaN(num) || num < 0) throw new Error("Ticket number must be non-negative.");
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return `Generated Ticket ID: ${fact}`;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function checkLibraryNote() {
  const note = prompt("Enter the note text:");
  return note.includes("Library") ? "Note contains 'Library'" : "Note does not contain 'Library'";
}

function secretShelf(password) {
  const note = "(Rare Book Note: Handle with Care)";
  return function (inputPassword) {
    return inputPassword === password ? note : "Access Denied";
  };
}
function rareBookAccess() {
  const password = prompt("Set a password for the rare book:");
  const shelf = secretShelf(password);
  const attempt = prompt("Enter password to access note:");
  return shelf(attempt);
}

function reverseISBN() {
  try {
    const isbn = parseInt(prompt("Enter ISBN number:"));
    if (isNaN(isbn)) throw new Error("ISBN must be a number.");
    const sign = Math.sign(isbn);
    const reversed = parseInt(Math.abs(isbn).toString().split("").reverse().join(""));
    const final = sign * reversed;
    const isPal = final.toString() === final.toString().split("").reverse().join("");
    return `Reversed ISBN: ${final}\nPalindrome: ${isPal}`;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function checkBookTitlePalindrome() {
  const title = prompt("Enter the book title:");
  const isPal = title === title.split("").reverse().join("");
  return `Is the title a palindrome? ${isPal}`;
}

function sqrtPages() {
  try {
    const pages = parseInt(prompt("Enter total pages read:"));
    if (isNaN(pages)) throw new Error("Pages must be a number.");
    if (pages < 0) throw new Error("Negative page count not allowed.");
    return `Square root of pages read: ${Math.sqrt(pages).toFixed(2)}`;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}
function isPrimeShelf() {
  try {
    const num = parseInt(prompt("Enter shelf number:"));
    if (isNaN(num) || num < 2) throw new Error("Shelf number must be >= 2.");
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return "Not Prime Shelf Number";
    }
    return "Prime Shelf Number";
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

function mainMenu() {
  while (true) {
    const choice = prompt(
      "=== Library Management Console ===\n" +
      "1. Compare two books\n" +
      "2. Generate factorial-based ticket ID\n" +
      "3. Check if note contains 'Library'\n" +
      "4. Store & retrieve rare book note (closure)\n" +
      "5. Reverse ISBN & check palindrome\n" +
      "6. Check if book title is palindrome\n" +
      "7. Find square root of pages read\n" +
      "8. Check if shelf number is prime\n" +
      "9. Exit\n\n" +
      "Enter your choice:"
    );
    let result;
    switch (choice) {
      case "1": result = compareBooks(); break;
      case "2": result = factorialTicket(); break;
      case "3": result = checkLibraryNote(); break;
      case "4": result = rareBookAccess(); break;
      case "5": result = reverseISBN(); break;
      case "6": result = checkBookTitlePalindrome(); break;
      case "7": result = sqrtPages(); break;
      case "8": result = isPrimeShelf(); break;
      case "9": alert("Goodbye!"); return;
      default: result = "Invalid choice. Try again.";
    }
    alert(result);
  }
}
mainMenu();
