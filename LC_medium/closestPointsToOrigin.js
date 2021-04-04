// Given an array of points where points[i] = [xi, yi] 
// represents a point on the X-Y plane and an integer k, 
// return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane 
// is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer 
// is guaranteed to be unique (except for the order that it is in).

var kClosest = function(points, k) {
    const arr = [];
    
    for (let point of points) {
        arr.push([point[0], point[1], Math.sqrt((point[0] ** 2) + (point[1] ** 2))]);
    }
    
    arr.sort((a, b) => a[2] - b[2]);
    
    const result = [];
    while (k > 0) {
        let temp = arr.shift();
        result.push([temp[0], temp[1]]);
        k--;
    }
    
    return result; 
};