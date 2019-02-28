function findLongestWord(str) {
  let longestWord = '';
  let wordBeginning = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ') {
      let currentWord = str.substring(wordBeginning, index);
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      wordBeginning = index + 1;
    }
  }
  return longestWord;
 }
 