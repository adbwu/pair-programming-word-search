const { transpose, transposeDiag} = require('./transpose.js');

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const diagJoin = transposeDiag(letters).map(ls => ls.join(''));
  let result = false;
  let drow = word.split("").reverse().join("");
  for (l of horizontalJoin) {
    l.search(word) !== -1 || l.search(drow) !== -1 ? result = true : "";
  }
  for (l of verticalJoin) {
    l.search(word) !== -1 || l.search(drow) !== -1 ? result = true : "";
  }
  for (l of diagJoin) {
    l.search(word) !== -1 || l.search(drow) !== -1 ? result = true : "";
  }
  return result;
};

module.exports = wordSearch;


console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], ''));
