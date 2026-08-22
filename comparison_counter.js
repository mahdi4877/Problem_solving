function linearSearchWithCount(arr, target) {
  let comparisons = 0;

  for (let i = 0; i < arr.length; i++) {
    comparisons++;
    if (arr[i] === target) {
      return { index: i, comparisons };
    }
  }

  return { index: -1, comparisons };
}

console.log(linearSearchWithCount([10, 23, 45, 70, 91, 105], 91));
