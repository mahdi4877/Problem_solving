const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenCount = nums.reduce(
  (count, num) => (num % 2 === 0 ? count + 1 : count),
  0,
);

console.log(evenCount);
