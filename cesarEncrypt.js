function cesarEncrypt(str, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  str = str.toLowerCase();
  for(let i in str) {
    if (alphabet.includes(str[i])) {
      const position = (alphabet.indexOf(str[i]) + key) % alphabet.length;
      result += alphabet[position];
    } else {
      result += str[i];
    }
  }
  return result;
 }
 