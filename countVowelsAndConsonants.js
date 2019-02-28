function countVowelsAndConsonants(str) {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let vCounter = cCounter = 0;
  for (let i in str) {
    if (vowels.includes(str[i])) vCounter++;
    else if (consonants.includes(str[i])) cCounter++;
  }
  return `String contains vowels: ${vCounter} , consonants: ${cCounter}`;
 }
 