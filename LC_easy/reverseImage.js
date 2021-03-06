// Given an n x n binary matrix image, flip the image 
// horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// brute force solution
var flipAndInvertImage = function(image) {
    const reversed = [];
    
    for (let i = 0; i < image.length; i++) {
        reversed[i] = [];
        
        for (let j = image[i].length - 1; j >= 0; j--) {
            if (image[i][j] === 1) {
                reversed[i].push(0);
            } else reversed[i].push(1);
        }
    }
    
    return reversed;
};

// alternative solution 
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image.length / 2; j++) {
            let swap = image[i][j];
            image[i][j] = +!image[i][image.length - 1 - j];
            image[i][image.length - 1 - j] = +!swap;
        }
    }
    
    return image;
};