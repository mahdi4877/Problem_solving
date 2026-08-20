const originalObj = { id: 101, title: "JavaScript Book" };

const jsonString = JSON.stringify(originalObj);
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj.title);
