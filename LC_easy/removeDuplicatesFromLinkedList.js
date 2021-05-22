// Given the head of a sorted linked list, delete all duplicates such 
// that each element appears only once. Return the linked list sorted as well.

// brute force
var deleteDuplicates = function(head) {
    if (!head) return null;
    let curr = head;
    let next = head.next;
    
    while (next) {
        if (curr.val === next.val) {
            if (next.next) {
                curr.next = next.next;
                next = next.next;
            } else {
                curr.next = null;
                next = null;
            }
        } else {
            curr = next;
            next = next.next;
        }
    }
    
    return head;
};