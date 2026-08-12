const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of terms: ", (input) => {
  let n = Number(input);
  let a = 0;
  let b = 1;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }

  rl.close();
});
