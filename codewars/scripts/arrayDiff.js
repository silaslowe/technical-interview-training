// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:


// My Solution

function arrayDiff(a, b) {
  let aArr = [...a]
  for (let i = 0; i < bArr.length; i++) {
      console.log(aArr)
   aArr = aArr.filter(num => num != bArr[i])
  }
return aArr
}

console.log(arrayDiff([2,15,-9,-19],[-19,15,-9]))
console.log(arrayDiff([1,2,3], [1,2]))

// Other Solutions

array_diff = require("lodash").difference;

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
