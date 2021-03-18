// You are given an array of k linked-lists lists, 
// each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// brute force solution
const mergeKLists = function steps(lists) {
    if (!lists) return [];
    if (lists === []) return [[]];
    const arr = [];
    
    for (let list of lists) {
        let head = list;
        
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
    }
    
    arr.sort((a, b) => a - b);
    let head = new ListNode(arr[0]);
    let selectedNode = head;
    
    for (let i = 1; i < arr.length; i++) {
        selectedNode.next = new ListNode(arr[i]);
        selectedNode = selectedNode.next;
    }
    
    return head;
}

// optimized solution with a helper func
const mergeKLists = function steps(lists) {
    if (lists.length === 0 ) {
        return null;
    }

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
}

function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let temp = dummy;
    
    while (a !== null && b !== null) {
         if (a.val < b.val) {
             temp.next = a;
             a = a.next;
         } else {
             temp.next = b;
             b = b.next;
         }
         temp = temp.next;
     }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return dummy.next;
}

module.exports = mergeKLists;