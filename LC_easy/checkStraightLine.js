// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] 
// represents the coordinate of a point. Check if these points make a straight line in the XY plane.

var checkStraightLine = function(coordinates) {
    let xDiff = coordinates[1][0] - coordinates[0][0];
    let yDiff = coordinates[1][1] - coordinates[0][1];
    
    for(let i = 2; i < coordinates.length; i++) {
        let currXDiff = coordinates[i][0] - coordinates[i-1][0];
        let currYDiff = coordinates[i][1] - coordinates[i-1][1];
        
        if(xDiff*currYDiff !== yDiff*currXDiff) return false;
    }
    return true;
};