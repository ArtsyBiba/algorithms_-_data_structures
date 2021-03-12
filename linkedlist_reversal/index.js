// Given the head of a singly linked list, reverse the list, 
// and return the reversed list.

//  Definition for singly-linked list.
//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
 
//  @param {ListNode} head
//  @return {ListNode}

// iterative solution
const reverseList = function (nums) {
  let current = head;
  let previous = null;
  let next = head;

  while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }

  return previous;
}

// recursive solution
const reverseList = function (nums) {
  if (!head || !head.next) return head;
    
  const rest = reverseList(head.next);
  head.next.next = head;
  
  head.next = null;
  
  return rest;
}

module.exports = reverseList;