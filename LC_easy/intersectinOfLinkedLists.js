// Given the heads of two singly linked-lists headA and headB, 
// return the node at which the two lists intersect. If the two 
// linked lists have no intersection at all, return null.

// It is guaranteed that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let curA = headA;
    let curB = headB;
    
    while (curA !== curB) {
        if (curA.next) {
            curA = curA.next;
        } else {
            if (!curB.next) {
                curA = null;
                break;
            }
            curA = headB;
        }
        
        if (curB.next) {
            curB = curB.next 
        } else {
            curB = headA;
        }
    }
    
    return curA;
};