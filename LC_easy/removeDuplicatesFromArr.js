const test = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7];

function removeDuplicates(arr) {
  const map = {};

  for (let num of arr) {
    if (map[num]) {
      continue;
    } else map[num] = num;
  }

  return Object.values(map);
}

console.log(removeDuplicates(test));