// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

var MedianFinder = function() {
    this.arr = [];
};

MedianFinder.prototype.addNum = function(num) { 
    let low = 0 ; 
    let high = this.arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
            
        if (this.arr[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    this.arr.splice(low, 0, num);
};

MedianFinder.prototype.findMedian = function() {
    if (this.arr.length % 2 === 0) {
        const mid = this.arr.length / 2;
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        const mid = Math.floor(this.arr.length / 2);
        return (this.arr[mid]);
    }
};