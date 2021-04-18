// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make 
// using the letters printed on those tiles.

var numTilePossibilities = function(tiles) {
    const map = {};
    
    for (let tile of tiles) {
        if (map[tile]) {
            map[tile]++;
        } else map[tile] = 1;
    }
    
    return helper(map);
};

const helper = function(map) {
    let sum = 0;
    
    for (let key in map) {
        if (map[key] === 0) continue;
        sum++;
        map[key]--;
        sum += helper(map, sum);
        map[key]++;
    }
    
    return sum;
};