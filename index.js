function square(n) {
  return n * n;
}

function power(base, exponent) {
  if (exponent === 0) return 1;
  let result = base;
  for (let index = 0; index < exponent - 1; index++) {
    result *= base;
  }
  return result;
}
