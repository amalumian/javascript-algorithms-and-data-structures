"use strict";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function recursiveBinarySearch(array, item, low, high) {
  count += 1;

  let mid = Math.floor((low + high) / 2);
  let guess = array[mid];

  if (guess === item) {
    return mid;
  }

  if (guess > item) {
    return recursiveBinarySearch(array, item, low, mid - 1);
  } else if (guess < item) {
    return recursiveBinarySearch(array, item, mid + 1, high);
  } else {
    return null;
  }
}

console.log("O(log n)");
console.log("Result =", recursiveBinarySearch(array, 3, 0, array.length));
console.log("Count =", count);
