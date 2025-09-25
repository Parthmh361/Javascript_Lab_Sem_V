function analyzeApplication(rawText) {
  function extractName(text) {
    let match = text.match(/Applicant:\s*([^\n]+)/i);
    if (!match) return null;
    let name = match[1].trim().toLowerCase();
    return name
      .split(/\s+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  function extractEmails(text) {
    let emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/gi) || [];
    let primary = emails.length > 0 ? emails[0].toLowerCase() : null;
    let alt = emails.slice(1).map(e => e.toLowerCase());
    return { primary, alt };
  }
  function extractPhone(text) {
    let match = text.match(/\+\d{1,3}-\d{10}/); 
    if (!match) return "Invalid phone number";
    let phone = match[0];
    let digits = phone.split("-")[1];
    return /^[6-9]\d{9}$/.test(digits) ? phone : "Invalid phone number";
  }
  function extractSkills(text) {
    let match = text.match(/Skills:\s*([^\n]+)/i);
    if (!match) return [];
    return match[1]
      .split(/[,;]/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }
  function extractHashtags(text) {
    return text.match(/#[A-Za-z0-9_]+/g) || [];
  }

  function extractSalary(text) {
    let match = text.match(/Salary:\s*.*?([\d,]+)/i);
    if (!match) return null;
    return parseInt(match[1].replace(/,/g, ""));
  }
  function countWords(text) {
    let words = text.match(/\b\w+\b/g) || [];
    return words.length;
  }
  function countVowels(text) {
    let vowels = text.match(/[aeiou]/gi) || [];
    return vowels.length;
  }
  return {
    applicant: extractName(rawText),
    primaryEmail: extractEmails(rawText).primary,
    altEmails: extractEmails(rawText).alt,
    phone: extractPhone(rawText),
    skills: extractSkills(rawText),
    hashtags: extractHashtags(rawText),
    salary: extractSalary(rawText),
    wordCount: countWords(rawText),
    vowelCount: countVowels(rawText)
  };
}

console.log("Application 1:", analyzeApplication(application1));
console.log("Application 2:", analyzeApplication(application2));
console.log("Application 3:", analyzeApplication(application3));
console.log("Application 4:", analyzeApplication(application4));
