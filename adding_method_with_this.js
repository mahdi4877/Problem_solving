student.describe = function () {
  return `${this.name} (${this.dept}, Semester: ${this.semester}) - Skills: ${this.skills.join(", ")}`;
};

console.log(student.describe());
