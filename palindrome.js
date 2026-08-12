const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
  let num = Number(input);
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (original === reversed) {
    console.log(original + " is a Palindrome Number");
  } else {
    console.log(original + " is not a Palindrome Number");
  }

  rl.close();
});
