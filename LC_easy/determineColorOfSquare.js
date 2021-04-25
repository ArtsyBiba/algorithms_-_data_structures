// You are given coordinates, a string that represents the coordinates 
// of a square of the chessboard. Below is a chessboard for your reference.

var squareIsWhite = function(coordinates) {
    const letters = 'abcdefgh';
    const map = {};
    
    for (let i = 0; i < letters.length; i++) {
        map[letters[i]] = i + 1;
    }
    
    const letter = coordinates[0];
    const number = Number(coordinates[1]);
        
    if (number % 2 !== 0 && map[letter] % 2 !== 0) return false;
    if (number % 2 === 0 && map[letter] % 2 === 0) return false;

    return true;
};

// optimized solution
var squareIsWhite = function(coordinates) {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    
    let i = 0;
    
    while (coordinates[0] !== columns[i]) i++;
    
    let num = i + Number(coordinates[1]);
    
    
    return num % 2 === 0 
};