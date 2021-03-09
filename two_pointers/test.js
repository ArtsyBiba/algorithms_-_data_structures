const hasCycle = require('./index');

test('has cycle is a function', () => {
  expect(typeof hasCycle).toEqual('function');
});

test('returns true if there is a cycle in the linked list. Otherwise, returns false.', () => {
    expect(hasCycle([3,2,0,-4])).toEqual(true);
});

test('returns true if there is a cycle in the linked list. Otherwise, returns false.', () => {
    expect(hasCycle([1, 2])).toEqual(true);
});

test('returns true if there is a cycle in the linked list. Otherwise, returns false.', () => {
    expect(hasCycle([1])).toEqual(false);
});
