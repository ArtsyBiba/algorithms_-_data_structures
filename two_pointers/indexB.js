// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached 
// again by continuously following the next pointer. Internally, pos is used to denote the index 
// of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

// solution #1
const detectCycle = function(head) {
    while (head) {
        if (head.visited) return head;
        head.visited = true;
        head = head.next
    }

    return head;
};

// solution #2
const detectCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            while (head !== fast) {
                head = head.next;
                fast = fast.next;
            }
            return head;
        }
    }
    return null;
};

module.exports = detectCycle;