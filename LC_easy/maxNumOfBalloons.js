// Given a string text, you want to use the characters of 
// text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return 
// the maximum number of instances that can be formed.

var maxNumberOfBalloons = function(text) {
    const mapOne = {};
    const mapTwo = {};
    const str = 'balloon';
    
    for (const char of str) {
        if (mapOne[char]) {
            mapOne[char]++;
        } else mapOne[char] = 1;
    }
    
    for (const char of text) {
        if (mapTwo[char]) {
            mapTwo[char]++;
        } else mapTwo[char] = 1;
    }
    
    let result = 0;
    
    while(mapTwo['b'] >= 1) {
        let count = 1;
        for (const key in mapOne) {
            if (!mapTwo[key] || mapTwo[key] < mapOne[key]) {
                count--;
                break;
            }
            mapTwo[key] = mapTwo[key] - mapOne[key];
        }
        result += count;
    }
    
    return result;
};

// alternative solution
var maxNumberOfBalloons = function(text) {
    const mapOne = {};
    const mapTwo = {};
    const str = 'balloon';
    
    for (const char of str) {
        if (mapOne[char]) {
            mapOne[char]++;
        } else mapOne[char] = 1;
    }
    
    for (const char of text) {
        if (mapTwo[char]) {
            mapTwo[char]++;
        } else mapTwo[char] = 1;
    }
    
    let result = [];

    for (const key in mapOne) {
        if (!mapTwo[key] || mapTwo[key] < mapOne[key]) {
            result = 0;
            break;
        }
        const curr = Math.floor(mapTwo[key] / mapOne[key]);
        result.push(curr);
    }
    
    return !result.length ? 0 : Math.min(...result);
};