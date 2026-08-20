let sum = 0;
let n = 100;

for (let i = 1; i <= n; i++) {
  sum += i;
}

let formula = (n * (n + 1)) / 2;

console.log("Loop sum:", sum);
console.log("Formula:", formula);
console.log("Verified:", sum === formula);
