function removeLetter(str, letter) {
  let result = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== letter) {
      result += str[index];
    }
  }
  return result;
}

function removeLetterImproved(str, letter) {
  while ( str.indexOf(letter) !== -1) {
    let index = str.indexOf(letter);

    str = str.substring(0, index) + str.substring(index + 1);
  }

  return str;
}


function removeLetterRegExp(str, letter) {
  const regExp = new RegExp(letter, 'gi');
  return str.replace(regExp, '');
 }

 'abc'.replace(/b/g, '');

