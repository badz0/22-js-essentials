function countOccurrence(str, letter) {
  let counter = 0;
  let startIndex = 0;

  while (str.includes(letter, startIndex)) {
    counter++;

    startIndex = str.indexOf(letter, startIndex) + 1;
    console.log('startIndex: ', startIndex);
  }

  return counter;
}

