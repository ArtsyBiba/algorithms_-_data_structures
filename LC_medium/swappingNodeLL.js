// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values 
// of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// brute force solution
var swapNodes = function(head, k) {
    const arr = [];
    let curr = head;
    
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let temp = arr[k - 1];
    arr[k - 1] = arr[arr.length - k];
    arr[arr.length - k] = temp;
    
    let newCurr = head;
    while (newCurr) {
        let val = arr.shift();
        newCurr.val = val;
        newCurr = newCurr.next;
    }
    
    return head;
};