// Prompt for name and semester
const name = prompt("Enter your full name:");
const semester = prompt("Enter your semester:");
alert(`Welcome, ${name} (Semester ${semester})!`);
console.log(`Student Name: ${name}, Semester: ${semester}`);

const profileDiv = document.getElementById("profile");
const imageInput = document.getElementById("image");

const enrollment = "104";
const email = "parth.cghoudhari@sitnagpur.ac.in";
const branch = "Computer Science and Engineering";
const skills = "HTML, CSS, JavaScript, Python";
const goal = "To become a full-stack developer";
const date = new Date().toLocaleString();

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) {
    alert("Please select an image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const imgURL = event.target.result;

    profileDiv.innerHTML = `
      <h2>Student Profile</h2>
      <img src="${imgURL}" alt="Profile Image" />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Semester:</strong> ${semester}</p>
      <p><strong>Enrollment No:</strong> ${enrollment}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Branch:</strong> ${branch}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Career Goal:</strong> ${goal}</p>
      <p><strong>Submitted On:</strong> ${date}</p>
    `;
  };

  reader.readAsDataURL(file);
});
