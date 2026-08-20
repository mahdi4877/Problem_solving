const student = {
  name: "Mahdi",
  dept: "Computer Science",
  semester: "4th",
  skills: ["JavaScript", "Git", "Problem Solving"],
};

console.log(
  `${student.name} is a ${student.semester} semester student in the ${student.dept} department, skilled in ${student.skills.join(", ")}.`,
);
