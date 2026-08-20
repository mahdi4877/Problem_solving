function applyTwice(fn, value) {
  return fn(fn(value));
}

function double(x) {
  return x * 2;
}

console.log(applyTwice(double, 5));
