const transpose = function(matrix) {
    let results = [];
    const rows = matrix.length;
    const columns = matrix[0].length;
  
    for (const array of matrix) {
      for (let i = 0; i < columns; i++) {
        if (results[i] === undefined) results.push([]);
        results[i].push(array[i]);
      }
    }
    return results;
  };

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    let Vletters = transpose(letters)
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        //console.log('l ➤',l);
        if (l.includes(word)) return true;
    }

    const vertialJoin = Vletters.map(ls => ls.join(''))
    for (v of vertialJoin) {
        console.log('v ➤',v);
        if (v.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD')

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'LARRY')
  
