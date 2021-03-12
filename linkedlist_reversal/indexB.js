// Given the head of a singly linked list and two 
// integers left and right where left <= right, reverse 
// the nodes of the list from position left to position 
// right, and return the reversed list.

const reverseBetween = function (nums) {
  const before = { next: head };
  let prev = before;

  while (--left) {
    prev = prev.next;
    --right;
  }

  let curr = prev.next;
  while (--right) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return before.next;
}

module.exports = reverseBetween;