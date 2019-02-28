function stringRepeat(str, n) {
  let result = '';

  let index;
  for (index = 0; index < n; index += 1  ) { // ++
    result += str;
  }
  return result;
}

