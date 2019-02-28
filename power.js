function power(n, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let result = n;

  for (let index = exponent; index > 1; index -= 1) {
    result *= n;
  }

  return result;
}


console.log( Math.pow(2, 3) );
console.log( 2**3 );