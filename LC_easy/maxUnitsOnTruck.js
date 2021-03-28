// You are assigned to put some amount of boxes onto one truck. 
// You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number 
// of boxes that can be put on the truck. You can choose any boxes to 
// put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

var maximumUnits = function(boxTypes, truckSize) {
    let total = 0;
    let type = 0;
    
    boxTypes.sort((a,b) => b[1] - a[1]);
    
    while (truckSize > 0) {
        if (type > boxTypes.length - 1) return total;
        if (truckSize > boxTypes[type][0]) {
            total += boxTypes[type][0] * boxTypes[type][1];
            truckSize -= boxTypes[type][0];
            type++;
        } else {
            total += boxTypes[type][1];
            truckSize--;
        }
    }
    
    return total;
};