let students = [
    {name:"Parth", prn:"23070521104", marks:95, ages:21},
    {name:"Rohan", prn:"23070521105", marks:40, ages:22},
    {name:"Sahil", prn:"23070521106", marks:55, ages:23},
    {name:"Aman", prn:"23070521107", marks:60, ages:22},
    {name:"Karan", prn:"23070521108", marks:65, ages:25}
];
let student_names = students.map(student => student.name);
console.log("Student names are: " + student_names);
marks_less_than_50 = students.filter(student => student.marks < 50);
console.log("Students with marks less than 50: ", marks_less_than_50);
let average_marks = students.reduce((total, student) => total + student.marks, 0) / students.length;
console.log("Average marks of students: " + average_marks);
students.forEach(student => {
    console.log(`Report Card of ${student.name}: PRN: ${student.prn}, Marks: ${student.marks}, Age: ${student.ages}`);
});