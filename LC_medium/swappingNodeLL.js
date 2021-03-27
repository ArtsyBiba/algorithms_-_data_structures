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

// optimized solution
var swapNodes = function(head, k) {
    let node = head;
    let first = head;
    let second = head;
    
    for (let i = 1; i < k; i++) {
        node = node.next;
        second = second.next;
    }
    
    while (second.next) {
        first = first.next;
        second = second.next;
    }
    
    let temp = first.val;
    first.val = node.val;
    node.val = temp;
    return head;
};