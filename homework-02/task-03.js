const findLongestWord = function (string) {
  let longestWord = '';
  for (let i = 0; i < string.split(' ').length; i++) {
    if (string.split(' ')[i].length > longestWord.length) {
      longestWord = string.split(' ')[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
