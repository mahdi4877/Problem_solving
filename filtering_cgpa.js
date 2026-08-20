const students = [
  { name: "Rahim", cgpa: 3.8 },
  { name: "Karim", cgpa: 3.2 },
  { name: "Nadia", cgpa: 3.5 },
  { name: "Saima", cgpa: 3.1 },
];

const topStudents = students
  .filter((student) => student.cgpa >= 3.5)
  .map((student) => student.name);

console.log(topStudents);
