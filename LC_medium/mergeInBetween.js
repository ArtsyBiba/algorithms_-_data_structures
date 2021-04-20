// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure incidate the result:

var mergeInBetween = function(list1, a, b, list2) {
    let prev = null;
    let curr = list1;
    let currNode = 0;
    let next = list1.next;
    
    while (currNode !== a) {
        prev = curr;
        curr = next;
        next = next.next;
        currNode++;
    }
    
    while (currNode !== b) {
        curr = next;
        next = next.next;
        currNode++;
    }
    
    prev.next = list2;
    
    while (prev.next) {
        prev = prev.next;
    }
    
    prev.next = next;
    
    return list1
};