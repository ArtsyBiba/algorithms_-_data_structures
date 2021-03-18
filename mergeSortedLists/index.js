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

module.exports = mergeKLists;