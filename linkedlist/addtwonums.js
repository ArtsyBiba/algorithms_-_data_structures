// You are given two non-empty linked lists 
// representing two non-negative integers. 
// The digits are stored in reverse order, 
// and each of their nodes contains a single 
// digit. Add the two numbers and return the 
// sum as a linked list.

// You may assume the two numbers do not contain 
// any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;
    
    while (l1 || l2 || sum > 0) {
        
        if (l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10){
            carry = 1;
            sum = sum - 10;
        }
        
        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    
    return List.next;
}